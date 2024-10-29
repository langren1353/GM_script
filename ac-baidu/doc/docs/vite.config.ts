import { defineConfig } from "vite"
import vueJsx from "@vitejs/plugin-vue-jsx"
import vueSetupExtend from "vite-plugin-vue-setup-extend"
import compression from 'vite-plugin-compression2';
import zlib from 'zlib'

export default defineConfig({
  plugins: [
    vueJsx(), vueSetupExtend(),
    compression(),
    compression({ 
      algorithm: 'brotliCompress', 
      compressionOptions: {
        level: 9
      }
    })
  ],
  server: {
    host: "0.0.0.0",
    https: false,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: false,
        secure: false,
      },
    },
  },
  build: {
    target: 'esnext', // 使用现代 JavaScript 特性
    minify: 'terser', // 使用 Terser 进行压缩
    rollupOptions: {
      treeshake: true,
    },
    terserOptions: {
      compress: {
        drop_console: true, // 去除 console 语句
        drop_debugger: true, // 去除 debugger 语句
      },
      format: {
        comments: false, // 去除注释
      },
    },
    assetsInlineLimit: 4096, // 小于 4KB 的资源内联为 base64
    cssCodeSplit: true, // 启用 CSS 代码分割
  },
  optimizeDeps: {
    include: ['vue', 'vue-router'], // 预构建依赖
  },
})
