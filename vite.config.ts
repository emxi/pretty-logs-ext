import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        entryFileNames: 'content.js',
        format: 'iife',
      },
    },
    outDir: 'pretty-logs-dist',
    chunkSizeWarningLimit: 10000,
  },
})
