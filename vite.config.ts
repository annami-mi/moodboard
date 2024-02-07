import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [ { find: '@', replacement: resolve(__dirname, './src/') } ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/shared/scss/variables.scss"; @import "@/shared/scss/mixins.scss";`
      }
    }
  }
})