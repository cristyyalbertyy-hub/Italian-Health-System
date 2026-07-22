import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/** Standalone Vercel app uses `/`. Site Medical embed uses `/italian-health-system/`. */
const base = process.env.STUDIO9_SITE_BASE || '/';

export default defineConfig({
  base,
  plugins: [react()],
  publicDir: 'public',
});
