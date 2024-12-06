import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/Portfolio/", // Configure le chemin de base pour GitHub Pages ou Vercel
  server: {
    mimeTypes: {
      'application/javascript': ['js', 'mjs'],
    },
  },
});
