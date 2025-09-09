/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type {
  DOMConversionMap,
  DOMConversionOutput,
  DOMExportOutput,
  EditorConfig,
  LexicalNode,
  NodeKey,
  SerializedLexicalNode,
  Spread,
} from 'lexical';

import {DecoratorNode, $getNodeByKey, ElementNode} from 'lexical';
import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext';
import React from 'react';

export interface SerializedNumberInputNode
  extends Spread<
    {
      value: number;
      type: 'number-input';
      version: 1;
    },
    SerializedLexicalNode
  > {}

export class NumberInputNode extends DecoratorNode<JSX.Element> {
  __value: number;

  static getType(): string {
    return 'number-input';
  }

  static clone(node: NumberInputNode): NumberInputNode {
    return new NumberInputNode(node.__value, node.__key);
  }

  constructor(value: number = 1, key?: NodeKey) {
    super(key);
    this.__value = value;
  }

  createDOM(): HTMLElement {
    const div = document.createElement('div');
    div.style.display = 'inline-block';
    div.style.margin = '4px';
    div.setAttribute('draggable', 'true');
    div.setAttribute('data-drag-type', 'number-input');
    return div;
  }

  updateDOM(): false {
    return false;
  }

  isDraggable(): boolean {
    return true;
  }

  isInline(): boolean {
    return true;
  }

  canInsertTextBefore(): boolean {
    return false;
  }

  canInsertTextAfter(): boolean {
    return false;
  }

  setValue(value: number): void {
    const writable = this.getWritable();
    writable.__value = value;
  }

  getValue(): number {
    return this.__value;
  }

  exportJSON(): SerializedNumberInputNode {
    return {
      value: this.getValue(),
      type: 'number-input',
      version: 1,
    };
  }

  static importJSON(
    serializedNode: SerializedNumberInputNode,
  ): NumberInputNode {
    const {value} = serializedNode;
    const node = $createNumberInputNode(value);
    return node;
  }

  exportDOM(): DOMExportOutput {
    const element = document.createElement('div');
    element.setAttribute('data-lexical-number-input', 'true');
    element.setAttribute('data-value', this.__value.toString());
    element.style.display = 'inline-block';
    element.style.margin = '4px';
    element.style.backgroundColor = 'gray';
    element.style.padding = '8px';
    element.style.borderRadius = '4px';
    element.textContent = `Number Input: ${this.__value}`;
    return {element};
  }

  static importDOM(): DOMConversionMap | null {
    return {
      div: (domNode: HTMLElement) => {
        if (!domNode.hasAttribute('data-lexical-number-input')) {
          return null;
        }
        return {
          conversion: convertNumberInputElement,
          priority: 1,
        };
      },
    };
  }

  getTextContent(): string {
    return `Number Input: ${this.__value}`;
  }

  isKeyboardSelectable(): boolean {
    return true;
  }

  decorate(): JSX.Element {
    return (
      <NumberInputComponent value={this.__value} nodeKey={this.getKey()} />
    );
  }
}

function convertNumberInputElement(domNode: HTMLElement): DOMConversionOutput {
  const value = parseInt(domNode.getAttribute('data-value') || '1', 10);
  const node = $createNumberInputNode(value);
  return {node};
}

export function $createNumberInputNode(value: number = 1): NumberInputNode {
  return new NumberInputNode(value);
}

export function $isNumberInputNode(
  node: LexicalNode | null | undefined,
): node is NumberInputNode {
  return node instanceof NumberInputNode;
}

interface NumberInputComponentProps {
  value: number;
  nodeKey: NodeKey;
}

function NumberInputComponent({
  value,
  nodeKey,
}: NumberInputComponentProps): JSX.Element {
  const [editor] = useLexicalComposerContext();
  const [currentValue, setCurrentValue] = React.useState(value);
  const [isDragging, setIsDragging] = React.useState(false);

  const updateValue = (newValue: number) => {
    setCurrentValue(newValue);
    editor.update(() => {
      const node = $getNodeByKey(nodeKey);
      if ($isNumberInputNode(node)) {
        node.setValue(newValue);
      }
    });
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    console.log('Delete button clicked for node:', nodeKey);

    editor.update(() => {
      const node = $getNodeByKey(nodeKey);
      if ($isNumberInputNode(node)) {
        console.log('Removing node:', node);
        node.remove();
      } else {
        console.log('Node not found or not a NumberInputNode');
      }
    });
  };

  const handleDragStart = (e: React.DragEvent) => {
    setIsDragging(true);
    e.dataTransfer.setData('text/plain', nodeKey);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      style={{
        display: 'inline-block',
        marginTop: '2px',
        position: 'relative',
        border: isDragging ? '2px solid #28a745' : '2px solid transparent',
        opacity: isDragging ? 0.7 : 1,
        cursor: 'move',
        minWidth: 90,
      }}
      onMouseEnter={(e) => {
        if (!isDragging) {
          e.currentTarget.style.border = '2px solid #007bff';
        }
      }}
      onMouseLeave={(e) => {
        if (!isDragging) {
          e.currentTarget.style.border = '2px solid transparent';
        }
      }}>
      <div
        style={{
          backgroundColor: '#dddddd',
          minHeight: 40,
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          paddingLeft: '8px',
          paddingRight: '8px',
          borderRadius: '4px',
          fontSize: '18px',
        }}>
        <span>Câu</span>
        <input
          type="number"
          value={currentValue}
          onChange={(e) => updateValue(parseInt(e.target.value, 10) || 0)}
          style={{
            width: '25px',
            padding: '2px',
            border: '1px solid #ccc',
            borderRadius: '2px',
            fontSize: '20px',
            textAlign: 'center',
          }}
        />
        <button
          onClick={handleDelete}
          onMouseDown={(e) => e.stopPropagation()}
          style={{
            position: 'absolute',
            top: '-8px',
            right: '-8px',
            backgroundColor: 'red',
            color: 'white',
            border: '1px solid #ccc',
            padding: '2px 6px',
            borderRadius: '50%',
            cursor: 'pointer',
            fontSize: '12px',
            width: '20px',
            height: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
            pointerEvents: 'auto',
          }}>
          ×
        </button>
      </div>
    </div>
  );
}
