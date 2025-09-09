# Lexical Playground Library

A comprehensive rich text editor library built with Lexical and React.

## Installation

```bash
npm install lexical-playground
```

Or install from GitHub:

```bash
npm install git+https://github.com/your-username/lexical-playground.git
```

## Usage

### Basic Usage

```tsx
import React from "react";
import { App, Editor, Settings } from "lexical-playground";

function MyApp() {
  return (
    <div>
      <App />
    </div>
  );
}
```

### Using Individual Components

```tsx
import React from "react";
import { Editor, Settings, PlaygroundEditorTheme } from "lexical-playground";

function MyEditor() {
  return (
    <div>
      <Settings />
      <Editor theme={PlaygroundEditorTheme} />
    </div>
  );
}
```

### Using Hooks

```tsx
import React from "react";
import { useFlashMessage, useModal } from "lexical-playground";

function MyComponent() {
  const { showMessage } = useFlashMessage();
  const { showModal } = useModal();

  const handleClick = () => {
    showMessage("Hello World!");
    showModal("My Modal");
  };

  return <button onClick={handleClick}>Click me</button>;
}
```

### Using Contexts

```tsx
import React from "react";
import {
  SettingsContext,
  FlashMessageContext,
  ToolbarContext,
} from "lexical-playground";

function MyApp() {
  return (
    <SettingsContext.Provider value={initialSettings}>
      <FlashMessageContext.Provider>
        <ToolbarContext.Provider>
          {/* Your app content */}
        </ToolbarContext.Provider>
      </FlashMessageContext.Provider>
    </SettingsContext.Provider>
  );
}
```

### Using Utilities

```tsx
import {
  getSelectedNode,
  getDOMRangeRect,
  joinClasses,
} from "lexical-playground";

// Use utility functions
const selectedNode = getSelectedNode();
const rect = getDOMRangeRect();
const className = joinClasses("class1", "class2");
```

## Available Components

### Main Components

- `App` - Main application component
- `Editor` - Rich text editor component
- `Settings` - Settings panel component

### Contexts

- `SettingsContext` - Settings state management
- `FlashMessageContext` - Flash message notifications
- `SharedHistoryContext` - Shared history management
- `ToolbarContext` - Toolbar state management

### Hooks

- `useFlashMessage` - Flash message hook
- `useModal` - Modal management hook
- `useReport` - Reporting functionality hook

### Themes

- `PlaygroundEditorTheme` - Main editor theme
- `CommentEditorTheme` - Comment editor theme
- `StickyEditorTheme` - Sticky editor theme

### Utilities

- `docSerialization` - Document serialization utilities
- `getDOMRangeRect` - DOM range utilities
- `getSelectedNode` - Node selection utilities
- `joinClasses` - CSS class utilities
- And many more...

## Building the Library

```bash
# Build the library
npm run build

# Build for development
npm run build-dev

# Build for production
npm run build-prod
```

## Development

```bash
# Start development server
npm run dev

# Preview build
npm run preview
```

## Dependencies

This library requires the following peer dependencies:

- React ^18.2.0
- React DOM ^18.2.0
- Lexical ^0.35.0
- @lexical/react ^0.35.0

## License

MIT
