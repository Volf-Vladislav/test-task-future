import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@widgets': path.resolve(__dirname, 'src/widgets'),
      '@shared': path.resolve(__dirname, 'src/shared'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@entities': path.resolve(__dirname, 'src/entities')
    }
  }
})
