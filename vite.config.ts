import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/elevonixs/',
  plugins: [react()],
  server: { port: 5177, strictPort: true },
})
