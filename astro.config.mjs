import { defineConfig } from 'astro/config';

// The CPL Hotels site, deployed to its own standalone GitHub Pages repo.
// https://danknowsaguy-web.github.io/cpl-hotels/
export default defineConfig({
  site: 'https://danknowsaguy-web.github.io',
  base: '/cpl-hotels',
});
