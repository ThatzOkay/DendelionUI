import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vite.dev/config/
const commonConfig = defineConfig({
  plugins: [vue()],
});

const libConfig = defineConfig({
  ...commonConfig,
  build: {
    minify: true,
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "DendelionUI",
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => `dendelion-ui.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  plugins: [
    vue()
  ],
});

const demoConfig = defineConfig({
  ...commonConfig,
  root: "./demo",
});

export default defineConfig(({ command }) => {
  const executionMode: "lib" | "demo" =
    (process.env.MODE as "lib" | "demo") || "lib";

  const mode = command === "build" ? "production" : "development";

  if (executionMode === "demo") {
    return { ...demoConfig, mode };
  } else if (executionMode === "lib") {
    return { ...libConfig, mode };
  }
  return commonConfig;
});
