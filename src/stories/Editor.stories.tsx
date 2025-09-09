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

function getExtraStyles(element: HTMLElement): string {
  // Parse styles from pasted input, but only if they match exactly the
  // sort of styles that would be produced by exportDOM
  let extraStyles = "";
  const fontSize = parseAllowedFontSize(element.style.fontSize);
  const backgroundColor = parseAllowedColor(element.style.backgroundColor);
  const color = parseAllowedColor(element.style.color);
  if (fontSize !== "" && fontSize !== "15px") {
    extraStyles += `font-size: ${fontSize};`;
  }
  if (backgroundColor !== "" && backgroundColor !== "rgb(255, 255, 255)") {
    extraStyles += `background-color: ${backgroundColor};`;
  }
  if (color !== "" && color !== "rgb(0, 0, 0)") {
    extraStyles += `color: ${color};`;
  }
  return extraStyles;
}

function buildImportMap(): DOMConversionMap {
  const importMap: DOMConversionMap = {};

  // Wrap all TextNode importers with a function that also imports
  // the custom styles implemented by the playground
  for (const [tag, fn] of Object.entries(TextNode.importDOM() || {})) {
    importMap[tag] = (importNode) => {
      const importer = fn(importNode);
      if (!importer) {
        return null;
      }
      return {
        ...importer,
        conversion: (element) => {
          const output = importer.conversion(element);
          if (
            output === null ||
            output.forChild === undefined ||
            output.after !== undefined ||
            output.node !== null
          ) {
            return output;
          }
          const extraStyles = getExtraStyles(element);
          if (extraStyles) {
            const { forChild } = output;
            return {
              ...output,
              forChild: (child, parent) => {
                const textNode = forChild(child, parent);
                if ($isTextNode(textNode)) {
                  textNode.setStyle(textNode.getStyle() + extraStyles);
                }
                return textNode;
              },
            };
          }
          return output;
        },
      };
    };
  }

  return importMap;
}
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
