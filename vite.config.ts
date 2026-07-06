import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          bighaCalculator: path.resolve(__dirname, 'bigha-calculator.html'),
          dakhilKharij: path.resolve(__dirname, 'dakhil-kharij.html'),
          landRatePatna: path.resolve(__dirname, 'land-rate-patna.html'),
          landRates: path.resolve(__dirname, 'land-rates.html'),
          bhulekh: path.resolve(__dirname, 'bhulekh.html'),
          lpcBihar: path.resolve(__dirname, 'lpc-bihar.html'),
          askExpert: path.resolve(__dirname, 'ask-expert.html'),
          documentExplainer: path.resolve(__dirname, 'document-explainer.html'),
          setupGuide: path.resolve(__dirname, 'setup-guide.html'),
          contact: path.resolve(__dirname, 'contact.html'),
          jamabandi: path.resolve(__dirname, 'jamabandi.html'),
          registryBihar: path.resolve(__dirname, 'registry-bihar.html'),
          about: path.resolve(__dirname, 'about.html'),
        }
      }
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
