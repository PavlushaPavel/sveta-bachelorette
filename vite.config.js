import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/sveta-bachelorette/',
  test: {
    environment: 'node',
    globals: true,
  },
})
