import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import importAssets from 'svelte-preprocess-import-assets';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	extensions: [".svelte", ".svx"],
	preprocess: [
		importAssets({
			sources: (defaultSources) => {
				return [
					...defaultSources,
					{
						tag: 'Image',
						srcAttributes: ['src']
					}
				]
			},
  			// Include URLs with specific extensions only
  			urlFilter: (url) => /\.(png|jpg|jpeg|gif|webp)$/.test(url),
		}),
	vitePreprocess(), mdsvex()],
	kit: {
		adapter: adapter(),
		alias: {
			"$assets": "src/assets",
		}
	}
};

export default config;
