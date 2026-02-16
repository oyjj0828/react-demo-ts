import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig((config) => {
  console.log(config);
  return {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    plugins: [
      react({
        babel: {
          plugins: [["babel-plugin-react-compiler"]],
        },
      }),
    ],
    base: "./",
    css: {
      modules: {
        localsConvention: "dashesOnly",
      },
      devSourcemap: true,
    },
  };
});
