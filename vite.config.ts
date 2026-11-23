import { defineConfig } from 'vite';

export default defineConfig(({ command, mode }) => ({
  base:
    mode === 'cloudflare'
      ? '/'
      : command === 'build'
        ? '/internet-hidden-toolbox/'
        : '/',
}));
