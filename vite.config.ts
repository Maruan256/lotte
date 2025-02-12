import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import  MillionLint from '@million/lint';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), MillionLint.vite()],
  build:{
    outDir: 'dist'
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  assetsInclude: ['**/*.JPG'],
  base: ''
})
