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
  LexicalNode,
  NodeKey,
  SerializedLexicalNode,
  Spread,
} from 'lexical';

import {DecoratorNode, $getNodeByKey} from 'lexical';
import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext';
import React from 'react';
import {MultipleChoiceInput} from '../ui/MultipleChoiceInput';

export interface SerializedMultipleChoiceInputNode
  extends Spread<
    {
      value: string;
      choices: string[];
      type: 'multiple-choice-input';
      version: 1;
    },
    SerializedLexicalNode
  > {}

export class MultipleChoiceInputNode extends DecoratorNode<JSX.Element> {
  __value: string;
  __choices: string[];

  static getType(): string {
    return 'multiple-choice-input';
  }

  static clone(node: MultipleChoiceInputNode): MultipleChoiceInputNode {
    return new MultipleChoiceInputNode(
      node.__value,
      node.__choices,
      node.__key,
    );
  }

  constructor(
    value: string = '',
    choices: string[] = ['Option 1', 'Option 2'],
    key?: NodeKey,
  ) {
    super(key);
    this.__value = value;
    this.__choices = choices;
  }

  createDOM(): HTMLElement {
    const div = document.createElement('div');
    div.style.display = 'inline-block';
    div.style.margin = '4px';
    div.setAttribute('draggable', 'true');
    div.setAttribute('data-drag-type', 'multiple-choice-input');
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

  setValue(value: string): void {
    const writable = this.getWritable();
    writable.__value = value;
  }

  getValue(): string {
    return this.__value;
  }

  setChoices(choices: string[]): void {
    const writable = this.getWritable();
    writable.__choices = choices;
  }

  getChoices(): string[] {
    return this.__choices;
  }

  exportJSON(): SerializedMultipleChoiceInputNode {
    return {
      value: this.getValue(),
      choices: this.getChoices(),
      type: 'multiple-choice-input',
      version: 1,
    };
  }

  static importJSON(
    serializedNode: SerializedMultipleChoiceInputNode,
  ): MultipleChoiceInputNode {
    const {value, choices} = serializedNode;
    const node = $createMultipleChoiceInputNode(value, choices);
    return node;
  }

  exportDOM(): DOMExportOutput {
    const element = document.createElement('div');
    element.setAttribute('data-lexical-multiple-choice-input', 'true');
    element.setAttribute('data-value', this.__value);
    element.setAttribute('data-choices', JSON.stringify(this.__choices));
    return {element};
  }

  static importDOM(): DOMConversionMap | null {
    return {
      div: (domNode: HTMLElement) => {
        if (!domNode.hasAttribute('data-lexical-multiple-choice-input')) {
          return null;
        }
        return {
          conversion: convertMultipleChoiceInputElement,
          priority: 1,
        };
      },
    };
  }

  getTextContent(): string {
    return `Multiple Choice: ${this.__value}`;
  }

  isKeyboardSelectable(): boolean {
    return true;
  }

  decorate(): JSX.Element {
    return (
      <MultipleChoiceInputComponent
        value={this.__value}
        choices={this.__choices}
        nodeKey={this.getKey()}
      />
    );
  }
}

function convertMultipleChoiceInputElement(
  domNode: HTMLElement,
): DOMConversionOutput {
  const value = domNode.getAttribute('data-value') || '';
  const choicesStr = domNode.getAttribute('data-choices') || '[]';
  const choices = JSON.parse(choicesStr);
  const node = $createMultipleChoiceInputNode(value, choices);
  return {node};
}

export function $createMultipleChoiceInputNode(
  value: string = '',
  choices: string[] = ['Option 1', 'Option 2'],
): MultipleChoiceInputNode {
  return new MultipleChoiceInputNode(value, choices);
}

export function $isMultipleChoiceInputNode(
  node: LexicalNode | null | undefined,
): node is MultipleChoiceInputNode {
  return node instanceof MultipleChoiceInputNode;
}

interface MultipleChoiceInputComponentProps {
  value: string;
  choices: string[];
  nodeKey: NodeKey;
}

function MultipleChoiceInputComponent({
  value,
  choices,
  nodeKey,
}: MultipleChoiceInputComponentProps): JSX.Element {
  const [editor] = useLexicalComposerContext();
  const [currentValue, setCurrentValue] = React.useState(value);
  const [currentChoices, setCurrentChoices] = React.useState(choices);
  const [isDragging, setIsDragging] = React.useState(false);

  const updateValue = (newValue: string) => {
    setCurrentValue(newValue);
    editor.update(() => {
      const node = $getNodeByKey(nodeKey);
      if ($isMultipleChoiceInputNode(node)) {
        node.setValue(newValue);
      }
    });
  };

  const updateChoices = (newChoices: string[]) => {
    setCurrentChoices(newChoices);
    editor.update(() => {
      const node = $getNodeByKey(nodeKey);
      if ($isMultipleChoiceInputNode(node)) {
        node.setChoices(newChoices);
      }
    });
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    console.log('Delete button clicked for node:', nodeKey);

    editor.update(() => {
      const node = $getNodeByKey(nodeKey);
      if ($isMultipleChoiceInputNode(node)) {
        console.log('Removing node:', node);
        node.remove();
      } else {
        console.log('Node not found or not a MultipleChoiceInputNode');
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
        margin: '4px',
        position: 'relative',
        border: isDragging ? '2px solid #28a745' : '2px solid transparent',
        opacity: isDragging ? 0.7 : 1,
        cursor: 'move',
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
          gap: '8px',
          paddingLeft: '8px',
          paddingRight: '8px',
          borderRadius: '4px',
          fontSize: '18px',
        }}>
        <MultipleChoiceInput
          value={currentValue}
          onChange={updateValue}
          choices={currentChoices}
          onChoicesChange={updateChoices}
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
