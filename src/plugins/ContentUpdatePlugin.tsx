/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type {JSX} from 'react';

import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext';
import {$generateNodesFromDOM, $generateHtmlFromNodes} from '@lexical/html';
import {$getRoot} from 'lexical';
import {useEffect, useRef} from 'react';

interface ContentUpdatePluginProps {
  htmlContent: string;
  onUpdateComplete?: () => void;
}

export default function ContentUpdatePlugin({
  htmlContent,
  onUpdateComplete,
}: ContentUpdatePluginProps): JSX.Element | null {
  const [editor] = useLexicalComposerContext();
  const lastHtmlContentRef = useRef<string>('');
  const isUpdatingRef = useRef<boolean>(false);
  const isInitializedRef = useRef<boolean>(false);
  const lastEditorContentRef = useRef<string>('');

  useEffect(() => {
    // Chỉ update khi:
    // 1. Lần đầu khởi tạo (khi htmlContent có giá trị và chưa được init)
    // 2. Hoặc khi htmlContent thay đổi nhưng không phải từ editor (external update)
    const shouldUpdate =
      (!isInitializedRef.current &&
        htmlContent &&
        htmlContent !== lastHtmlContentRef.current) ||
      (htmlContent !== lastHtmlContentRef.current &&
        htmlContent !== lastEditorContentRef.current &&
        !isUpdatingRef.current &&
        isInitializedRef.current);

    if (shouldUpdate) {
      lastHtmlContentRef.current = htmlContent;
      isUpdatingRef.current = true;
      isInitializedRef.current = true;

      // Báo hiệu cho ContentSyncPlugin rằng đang update từ external
      // @ts-ignore
      if (editor._setUpdatingFromExternal) {
        // @ts-ignore
        editor._setUpdatingFromExternal(true);
      }

      editor.update(
        () => {
          const parser = new DOMParser();
          const dom = parser.parseFromString(htmlContent, 'text/html');
          const nodes = $generateNodesFromDOM(editor, dom);

          const root = $getRoot();
          root.clear();
          root.append(...nodes);
        },
        {
          onUpdate: () => {
            isUpdatingRef.current = false;

            // Báo hiệu đã hoàn thành update
            // @ts-ignore
            if (editor._setUpdatingFromExternal) {
              // @ts-ignore
              editor._setUpdatingFromExternal(false);
            }

            // Gọi callback để reset external update flag
            if (onUpdateComplete) {
              onUpdateComplete();
            }
          },
        },
      );
    }
  }, [editor, htmlContent, onUpdateComplete]);

  // Track editor content để so sánh
  useEffect(() => {
    return editor.registerUpdateListener(({editorState}) => {
      editorState.read(() => {
        const currentEditorContent = $generateHtmlFromNodes(editor, null);
        lastEditorContentRef.current = currentEditorContent;
      });
    });
  }, [editor]);

  return null;
}
