import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['@mlc-ai/web-llm'] // Don't bundle web-llm, load it at runtime
    }
  },
  worker: {
    format: 'es'
  }
})
