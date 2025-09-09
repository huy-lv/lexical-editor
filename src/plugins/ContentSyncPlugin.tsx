/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type {JSX} from 'react';

import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext';
import {$generateHtmlFromNodes} from '@lexical/html';
import {useEffect, useRef} from 'react';

interface ContentSyncPluginProps {
  onContentChange: (htmlContent: string) => void;
}

export default function ContentSyncPlugin({
  onContentChange,
}: ContentSyncPluginProps): JSX.Element | null {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    return editor.registerUpdateListener(({editorState}) => {
      editorState.read(() => {
        const htmlContent = $generateHtmlFromNodes(editor, null);
        onContentChange(htmlContent);
      });
    });
  }, [editor, onContentChange]);

  return null;
}
