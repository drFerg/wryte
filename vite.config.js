import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools';
import * as path from 'node:path';

const supportedExtensions = ['.png', '.jpg', '.jpeg'];
/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		imagetools({
			defaultDirectives: (url) => {
				const extension = path.extname(url.pathname);
				if (supportedExtensions.includes(extension)) {
					return new URLSearchParams({
						format: 'avif;webp;' + extension.slice(1),
						picture: true,
						width: "300;500;700;1200",
					});
				}
				return new URLSearchParams();
			}
		}),
	sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;
