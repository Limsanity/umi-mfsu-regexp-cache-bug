import { defineConfig } from "umi";

export default defineConfig({
  npmClient: "pnpm",
  mfsu: {
    exclude: [/axios/],
  },
});
