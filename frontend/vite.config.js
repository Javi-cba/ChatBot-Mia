import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
const PORT = process.env.PORT || 5173;
// https://vite.dev/config
export default defineConfig({
  plugins: [react()],
  server: {
    port: PORT,
    host: '0.0.0.0',
  },
});
