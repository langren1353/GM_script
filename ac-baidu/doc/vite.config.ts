import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import vueSetupExtend from 'vite-plugin-vue-setup-extend' // 设置neme属性
// import AutoImport from 'unplugin-auto-import/vite' // 自动导入
import viteCompression from 'vite-plugin-compression' // 静态资源压缩
// import {visualizer} from 'rollup-plugin-visualizer' // 打包后的视图文件
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts(),
    vueJsx(),
    vueSetupExtend(),
    viteCompression({
      verbose: true,
      disable: false, // 不禁用压缩
      deleteOriginFile: false, // 压缩后是否删除原文件
      threshold: 10240, // 压缩前最小文件大小
      algorithm: 'brotliCompress', // 压缩算法
      ext: '.br', // 文件类型
    }),
    // visualizer({
    //   open:true,  //注意这里要设置为true，否则无效
    //   gzipSize:true,
    //   brotliSize:true
    // })
  ],
  server: {
    host: '0.0.0.0',
    port: 3300,
    open: true,
    https: false,
    proxy: {
      '^/mes': {
        target: `http://10.0.10.243:5000/mesv2/`,
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/mes/, ''),
      },
      '^/portal-user': {
        target: `http://10.0.10.240:8172`,
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/portal-user/, '/portal-user'),
      },
      '^/portal-sso': {
        target: `http://10.0.10.240:8171`,
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/portal-sso/, '/portal-sso'),
      },
    },
  },
  resolve: {
    // 配置别名
    alias: {
      '@': resolve(__dirname, 'packages'),
      '@pages': resolve(__dirname, 'docs/pages'),
      '@comp': resolve(__dirname, 'docs/components'),
    },
    // 类型： string[] 导入时想要省略的扩展名列表。
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.mjs'],
  },
  build: {
    outDir: 'lib',
    // cssCodeSplit: true, // 强制内联CSS
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
    },
    lib: {
      // entry: resolve(__dirname, 'packages/index.ts'),
      entry: './packages/index.ts',
      name: 't-ui-plus',
      // formats: ['es', 'cjs'],
      // formats: ['es', 'umd', 'cjs'],
      fileName: 't-ui-plus',
    },
  },
})
