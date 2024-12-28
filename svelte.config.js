import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Add preprocess to handle things like TypeScript, SCSS, etc.
  preprocess: vitePreprocess(),

  kit: {
    // Set the adapter to 'static' for generating a static site
    adapter: adapter(),





    // Optional: customize the app.html location if needed
    files: {
      // Set custom files directory paths if necessary
      assets: 'src/assets',   // Default, but you can customize the assets folder
      routes: 'src/routes',   // Default route files directory
      appTemplate: 'src/app.html'  // If you have a custom app.html, reference it here
    },
  },
};

export default config;

