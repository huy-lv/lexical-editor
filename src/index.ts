/**
 * Lexical Playground Library
 * Main entry point for the library
 */

// Export main components
export { default as App } from "./App";
export { default as Editor } from "./Editor";
export { default as Settings } from "./Settings";

// Export contexts
export { FlashMessageContext } from "./context/FlashMessageContext";
export { SettingsContext } from "./context/SettingsContext";
export { SharedHistoryContext } from "./context/SharedHistoryContext";
export { ToolbarContext } from "./context/ToolbarContext";

// Export hooks
export { default as useFlashMessage } from "./hooks/useFlashMessage";
export { default as useModal } from "./hooks/useModal";
export { default as useReport } from "./hooks/useReport";

// Export themes
export { default as PlaygroundEditorTheme } from "./themes/PlaygroundEditorTheme";
export { default as CommentEditorTheme } from "./themes/CommentEditorTheme";
export { default as StickyEditorTheme } from "./themes/StickyEditorTheme";

// Export utilities
export * from "./utils/docSerialization";
export * from "./utils/emoji-list";
export * from "./utils/getDOMRangeRect";
export * from "./utils/getSelectedNode";
export * from "./utils/getThemeSelector";
export * from "./utils/joinClasses";
export * from "./utils/setFloatingElemPosition";
export * from "./utils/setFloatingElemPositionForLinkEditor";
export * from "./utils/swipe";
export * from "./utils/url";

// Export app settings
export * from "./appSettings";

// Export collaboration utilities
export * from "./collaboration";

// Export commenting
export * from "./commenting";

// Export nodes collection
export { default as PlaygroundNodes } from "./nodes/PlaygroundNodes";

// Export contexts/providers and composer
export { LexicalComposer } from "@lexical/react/LexicalComposer";
export { TableContext } from "./plugins/TablePlugin";

// Export setup environment
export { default as setupEnv } from "./setupEnv";

// Re-export basic Lexical utilities
export {
  $getRoot,
  $getSelection,
  $createParagraphNode,
  $createTextNode,
} from "lexical";
