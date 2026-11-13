import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // relative base: the build works at a domain root and under /Portfolio/ on GitHub Pages
  base: './',
})
