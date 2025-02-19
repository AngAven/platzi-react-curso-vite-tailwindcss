import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
    // base: 'https://angaven.github.io/platzi-react-curso-vite-tailwindcss/',
  plugins: [
      react(),
      tailwindcss(),
  ],
})

