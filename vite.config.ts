import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// For development, use base: '/'
// For production/GitHub Pages, use: base: '/ENI/'
export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'framer-motion', 'react-router-dom'],
        },
      },
    },
  },
})
