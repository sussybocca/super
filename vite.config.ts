import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/vibro-frontend/', // <- Important for GitHub Pages
  build: {
    outDir: 'dist'
  }
});
