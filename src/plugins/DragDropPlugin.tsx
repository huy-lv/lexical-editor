import type {JSX} from 'react';
import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext';
import {useEffect} from 'react';
import {$getSelection, $isRangeSelection, $getNodeByKey} from 'lexical';
import {$isNumberInputNode} from '../nodes/NumberInputNode';
import {$isSingleChoiceInputNode} from '../nodes/SingleChoiceInputNode';
import {$isMultipleChoiceInputNode} from '../nodes/MultipleChoiceInputNode';

export default function DragDropPlugin(): JSX.Element | null {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    const handleDragOver = (e: DragEvent) => {
      e.preventDefault();
      e.dataTransfer!.dropEffect = 'move';

      // Get the exact position where the mouse is
      const x = e.clientX;
      const y = e.clientY;

      // Create a range at the exact mouse position
      const range = document.createRange();
      const textNode = document.elementFromPoint(x, y);

      if (textNode) {
        // Check if we're over a table cell
        const tableCell = textNode.closest('td, th');

        if (tableCell) {
          // Handle table cell drop
          const cellTextNode = tableCell.querySelector('*') || tableCell;
          let targetNode = cellTextNode;

          // Find the closest text node within the table cell
          while (
            targetNode &&
            targetNode.nodeType !== Node.TEXT_NODE &&
            targetNode.firstChild
          ) {
            targetNode = targetNode.firstChild as Element;
          }

          if (targetNode && targetNode.nodeType === Node.TEXT_NODE) {
            const textContent = targetNode.textContent || '';

            // Calculate character position within the table cell
            let charIndex = 0;
            for (let i = 0; i <= textContent.length; i++) {
              const tempRange = document.createRange();
              tempRange.setStart(targetNode, i);
              tempRange.setEnd(targetNode, i);
              const tempRect = tempRange.getBoundingClientRect();

              if (tempRect.left > x) {
                charIndex = i;
                break;
              }
              charIndex = i;
            }

            range.setStart(targetNode, charIndex);
            range.setEnd(targetNode, charIndex);
          } else {
            // If no text node found, place at the end of the table cell
            range.selectNodeContents(tableCell);
            range.collapse(false);
          }
        } else {
          // Handle regular text drop (existing logic)
          let targetNode = textNode;
          while (
            targetNode &&
            targetNode.nodeType !== Node.TEXT_NODE &&
            targetNode.firstChild
          ) {
            targetNode = targetNode.firstChild as Element;
          }

          if (targetNode && targetNode.nodeType === Node.TEXT_NODE) {
            const textContent = targetNode.textContent || '';

            // Create a temporary range to measure character positions
            let charIndex = 0;
            for (let i = 0; i <= textContent.length; i++) {
              const tempRange = document.createRange();
              tempRange.setStart(targetNode, i);
              tempRange.setEnd(targetNode, i);
              const tempRect = tempRange.getBoundingClientRect();

              if (tempRect.left > x) {
                charIndex = i;
                break;
              }
              charIndex = i;
            }

            range.setStart(targetNode, charIndex);
            range.setEnd(targetNode, charIndex);
          }
        }

        // Update the selection
        const domSelection = window.getSelection();
        if (domSelection) {
          domSelection.removeAllRanges();
          domSelection.addRange(range);
        }

        // Add visual indicator (cursor) at drop position
        const editorElement = editor.getRootElement();
        if (editorElement) {
          editorElement.style.cursor = 'text';
        }
      }
    };

    const handleDragLeave = (e: DragEvent) => {
      // Clear selection when leaving drag area
      const domSelection = window.getSelection();
      if (domSelection) {
        domSelection.removeAllRanges();
      }

      // Reset cursor
      const editorElement = editor.getRootElement();
      if (editorElement) {
        editorElement.style.cursor = 'default';
      }
    };

    const handleDrop = (e: DragEvent) => {
      e.preventDefault();

      const nodeKey = e.dataTransfer?.getData('text/plain');
      if (!nodeKey) return;

      editor.update(() => {
        const draggedNode = $getNodeByKey(nodeKey);
        if (
          !$isNumberInputNode(draggedNode) &&
          !$isSingleChoiceInputNode(draggedNode) &&
          !$isMultipleChoiceInputNode(draggedNode)
        )
          return;

        // Get the current selection (this should be where the user clicked/dropped)
        const selection = $getSelection();
        if (!$isRangeSelection(selection)) return;

        // Remove the node from its current position first
        draggedNode.remove();

        // Insert the node at the current selection position
        selection.insertNodes([draggedNode]);
      });

      // Reset cursor after drop
      const editorElement = editor.getRootElement();
      if (editorElement) {
        editorElement.style.cursor = 'default';
      }
    };

    const editorElement = editor.getRootElement();
    if (editorElement) {
      editorElement.addEventListener('dragover', handleDragOver);
      editorElement.addEventListener('dragleave', handleDragLeave);
      editorElement.addEventListener('drop', handleDrop);

      return () => {
        editorElement.removeEventListener('dragover', handleDragOver);
        editorElement.removeEventListener('dragleave', handleDragLeave);
        editorElement.removeEventListener('drop', handleDrop);
      };
    }
  }, [editor]);

  return null;
}
