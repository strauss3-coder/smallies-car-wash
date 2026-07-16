import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

// On GitHub Pages the site is served from /smallies-car-wash/; keep dev at root.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/smallies-car-wash/' : '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          motion: ['framer-motion'],
        },
      },
    },
  },
}));
