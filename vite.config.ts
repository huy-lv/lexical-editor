import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isLibrary = mode === "library";

  return {
    plugins: [react()],
    server: {
      host: true,
      port: 3000,
    },
    build: isLibrary
      ? {
          lib: {
            entry: resolve(__dirname, "src/index.ts"),
            name: "LexicalPlayground",
            fileName: (format) =>
              `index.${format === "es" ? "esm" : format}.js`,
            formats: ["es", "cjs"],
          },
          rollupOptions: {
            external: [
              "react",
              "react-dom",
              "lexical",
              "@lexical/react",
              "@lexical/clipboard",
              "@lexical/code",
              "@lexical/code-shiki",
              "@lexical/file",
              "@lexical/hashtag",
              "@lexical/html",
              "@lexical/link",
              "@lexical/list",
              "@lexical/mark",
              "@lexical/overflow",
              "@lexical/plain-text",
              "@lexical/rich-text",
              "@lexical/selection",
              "@lexical/table",
              "@lexical/utils",
              "@excalidraw/excalidraw",
              "date-fns",
              "katex",
              "lodash-es",
              "prettier",
              "react-day-picker",
              "react-error-boundary",
              "y-websocket",
              "yjs",
            ],
            output: {
              globals: {
                react: "React",
                "react-dom": "ReactDOM",
                lexical: "Lexical",
                "@lexical/react": "LexicalReact",
              },
            },
          },
          outDir: "dist",
        }
      : {
          outDir: "build",
        },
    define: {
      "process.env": {},
    },
    esbuild: {
      loader: "tsx",
      include: /src\/.*\.[jt]sx?$/,
      exclude: [],
    },
    optimizeDeps: {
      esbuildOptions: {
        loader: {
          ".js": "jsx",
        },
      },
    },
  };
});
