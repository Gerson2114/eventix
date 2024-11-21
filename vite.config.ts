import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/eventix/', // Cambia "mi-proyecto-react" por el nombre de tu repositorio
})
