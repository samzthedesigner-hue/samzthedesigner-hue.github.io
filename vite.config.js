import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['@mlc-ai/web-llm'] // CRITICAL: Don't pre-bundle web-llm
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      external: ['@mlc-ai/web-llm']
    }
  },
  worker: {
    format: 'es'
  }
})
