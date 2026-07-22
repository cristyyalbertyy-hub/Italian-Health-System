import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/italian-health-system/',
  plugins: [react()],
  publicDir: 'public',
});
