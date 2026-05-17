import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Para el repo wailware.github.io, base es '/'
// Si lo cambias a otro repo, pon base: '/nombre-repo/'
export default defineConfig({
  plugins: [react()],
  base: '/',
})
