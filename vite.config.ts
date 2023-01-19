import { defineConfig } from 'vite'
import path from 'path'

import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src'),
      },
    },
    server: {
      host: true,
      port: 3000,
    },
    base: 'test-vue3-router',
    build: {
      outDir: 'dist',
    },
  }
})
