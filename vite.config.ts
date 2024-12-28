import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite'; // Correct import

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [sveltekit()],
  resolve: {
  alias: {
     '@blockly': 'node_modules/blockly',
  optimizeDeps: {
    include: ['blockly'], // Pre-bundle Blockly modules
  },
  },
  },
});


