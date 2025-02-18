import { defineConfig } from 'vite'
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base:'./',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'index.html' // Ensure entry HTML is considered
    }
  },
  plugins: [react(), tailwindcss()],
  
})