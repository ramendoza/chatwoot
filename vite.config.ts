import { defineConfig } from 'vite';
import ruby from 'vite-plugin-ruby';
import vue from '@vitejs/plugin-vue';
import { aliases, vueOptions } from './vite.shared';
import yaml from '@rollup/plugin-yaml';

export default defineConfig({
  plugins: [ruby(), vue(vueOptions), yaml()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  server: {
    allowedHosts: ['vite'],
    watch: {
      usePolling: false,
      interval: 500,
      // Docker bind mounts are slow to poll; skip dirs Vite never serves
      ignored: [
        '**/tmp/**',
        '**/log/**',
        '**/public/**',
        '**/spec/**',
        '**/vendor/**',
        '**/storage/**',
        '**/coverage/**',
        '**/db/**',
        '**/swagger/**',
        '**/docs/**',
      ],
    },
  },
  resolve: { alias: aliases },
});
