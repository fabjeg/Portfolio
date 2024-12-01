import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Portfolio/", // Configure le chemin de base pour GitHub Pages
  build: {
    outDir: "dist", // Dossier de sortie
    assetsDir: "assets", // Dossier des ressources (CSS, JS)
  },
});
