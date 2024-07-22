import { defineConfig } from 'astro/config';
import yaml from '@rollup/plugin-yaml';
import path from "path";
const __dirname = './';

export default defineConfig({
  vite: {
    plugins: [yaml()],
    resolve: {
      alias: {
        "@src": `${path.resolve('', "./src/")}`,
        "@components": `${path.resolve(__dirname, "./src/components/")}`,
        "@layouts": `${path.resolve(__dirname, "./src/layouts/")}`,
        "@pages": `${path.resolve(__dirname, "./src/pages/")}`,
        "@content": `${path.resolve(__dirname, "./src/content/")}`
      },
    }
  },
});
