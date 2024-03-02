import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			precompress: false,
			strict: true,
			fallback: undefined,
			// fallback: '404.html',
		}),
		paths: {
			// base: ''
			base: process.argv.includes('dev') ? '' : 'https://brignoledanilo.it/'
		},
	}
};

export default config;
