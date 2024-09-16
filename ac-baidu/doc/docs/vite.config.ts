import { defineConfig } from "vite"
import vueJsx from "@vitejs/plugin-vue-jsx"
import vueSetupExtend from "vite-plugin-vue-setup-extend"
import compression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    vueJsx(), vueSetupExtend(),
    compression({
      algorithm: 'brotliCompress', // 生成 .br 文件
      ext: '.br',
      threshold: 0, // 对所有文件进行压缩
    }),
    compression({
      algorithm: 'gzip', // 生成 .gz 文件
      ext: '.gz',
      threshold: 0, // 对所有文件进行压缩
    }),
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
