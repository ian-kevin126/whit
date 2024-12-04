import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

import legacy from "@vitejs/plugin-legacy";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const isBuild = command === "build";

  const legacyTargets = isBuild
    ? [
        "Android > 39",
        "Chrome >= 60",
        "Safari >= 10.1",
        "iOS >= 10.3",
        "Firefox >= 54",
        "Edge >= 15",
      ]
    : undefined;

  return {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    plugins: [
      vue(),

      legacy({
        targets: legacyTargets,
      }),
    ],
    test: {
      include: ["src/**/*.{test,spec}.ts"],
      environment: "happy-dom",
      coverage: {
        reporter: ["html"],
      },
    },
  };
});
