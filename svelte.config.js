import adapter from '@sveltejs/adapter-static';

const isDev = process.env.NODE_ENV === 'development';

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
			assets: '',
			base: isDev ? '' : '/',
			relative: false,
		},
	}
};

export default config;
