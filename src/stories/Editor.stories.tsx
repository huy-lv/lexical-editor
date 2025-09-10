import type { Meta, StoryObj } from "@storybook/react";
import Editor from "../Editor";
import PlaygroundEditorTheme from "../themes/PlaygroundEditorTheme";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { $isTextNode, DOMConversionMap, TextNode } from "lexical";
import PlaygroundNodes from "../nodes/PlaygroundNodes";
import { ToolbarContext } from "../context/ToolbarContext";
import { TableContext } from "../plugins/TablePlugin";
import { SharedHistoryContext } from "../context/SharedHistoryContext";
import React from "react";
import { parseAllowedColor } from "../ui/ColorPicker";
import { parseAllowedFontSize } from "../plugins/ToolbarPlugin/fontSize";

const meta: Meta<typeof Editor> = {
  title: "Lexical/Editor",
  component: Editor,
  args: {},
};
export default meta;

const initialConfig = {
  editorState: undefined,
  // html: { import: buildImportMap() },
  // namespace: "Playground",
  nodes: [...PlaygroundNodes],
  theme: PlaygroundEditorTheme,
};

type Story = StoryObj<typeof Editor>;

export const Basic: Story = {
  render: () => (
    <LexicalComposer initialConfig={initialConfig}>
      <SharedHistoryContext>
        <TableContext>
          <ToolbarContext>
            <Editor htmlContent={"htmlContent"} setHtmlContent={() => {}} />
          </ToolbarContext>
        </TableContext>
      </SharedHistoryContext>
    </LexicalComposer>
  ),
};

// export const WithTheme: Story = {
//   render: () => <Editor theme={PlaygroundEditorTheme} />,
// };
