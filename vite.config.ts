import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
    minify: false,
  },
  resolve: {
    alias: {
      '@': '/src',
      // ... possibly other aliases
    },
  },
  plugins: [react()],
});
