import { resolve } from "path";
import postcssimport from "postcss-import";
import purgecss from "@fullhuman/postcss-purgecss";
import autoprefixer from "autoprefixer";
import postcssPresetEnv from "postcss-preset-env";

export default {
  root: resolve(__dirname, "src"),
  publicDir: "../public",
  css: {
    postcss: {
      plugins: [
        postcssimport(),
        autoprefixer(),
        postcssPresetEnv({
          browsers: "last 2 versions",
          stage: 3,
          features: { "nesting-rules": true },
        }),
        purgecss({
          content: ["*.html", "./src/**/*.{html,vue,js,ts,jsx,tsx}"],
          safelist: [
            // /^modal/,
            /^carousel/,
            // /^bs-/,
            // /^show$/,
            // /^collapse/,
            /^collapsing/,
            // /^nav/,
            // /^active$/,
            // /^fade/,
            // Aggiungi qui altre classi da preservare
          ],
          defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
          variables: false, // Mantiene le variabili CSS
          keyframes: false, // Mantiene le animazioni
        }),
      ],
    },
  },
  resolve: {
    alias: {
      "~bootstrap": resolve(__dirname, "node_modules/bootstrap"),
    },
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    minify: true,
    rollupOptions: {
      output: {
        chunkFileNames: "assets/[chunks]/[name].[hash].js",
        entryFileNames: "assets/js/main.min.js",

        assetFileNames: ({ name }) => {
          if (/\.(webP|avif|gif|jpe?g|png|svg)$/.test(name ?? "")) {
            return "assets/images/[name][extname]";
          }

          if (/\.css$/.test(name ?? "")) {
            return "assets/css/style.min.css";
          }
          return "assets/[ext]/[name][extname]";
        },
      },
    },
  },
  server: {
    host: "localhost",
    port: 8080,
  },
};
