import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  //解决“vite use --host to expose
  base: "./", //不加打包后白屏幕
  server: {
    host: "0.0.0.0",
    open: true,
  },
  resolve: {
    //别名配置，引用src路径下的东西可以通过@
    alias: [
      {
        find: "@",
        replacement: resolve(__dirname, "src"),
      },
    ],
  },
});
