import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'components': path.resolve(__dirname, './src/components'), 
      'pages': path.resolve(__dirname, './src/pages'), 
      'providers': path.resolve(__dirname, './src/providers'), 
      'utils': path.resolve(__dirname, './src/utils'),
      'utils': path.resolve(__dirname, './src/api'),
      'assets': path.resolve(__dirname, './src/assets')
    },
  },
})
