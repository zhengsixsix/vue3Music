import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { devPlugin } from "./plugins/devPlugin";
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [devPlugin(), vue(), vueJsx({
    // options are passed on to @vue/babel-plugin-jsx
  }),],
  server: {
    proxy: {
      '/api': {
        target: 'http://www.codeman.ink:3000',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '#': resolve(__dirname, 'types'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        // mixin和variable里面是函数和变量等供scss使用的非实体css, scss-loader需要
        additionalData: `
          @import "@/assets/less/mixin.less";
          @import "@/assets/less/variable.less";
        `,
      },
    },
  },

})
