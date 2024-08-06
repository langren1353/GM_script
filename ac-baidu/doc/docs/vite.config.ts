import { defineConfig } from "vite"
import vueJsx from "@vitejs/plugin-vue-jsx"
import vueSetupExtend from "vite-plugin-vue-setup-extend"
import path from "path"; // 设置neme属性

export default defineConfig({
  plugins: [vueJsx(), vueSetupExtend()],
  server: {
    host: "0.0.0.0",
    port: 2222,
    open: false,
    https: false,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: false,
        secure: false,
      },
    },
  }
})
