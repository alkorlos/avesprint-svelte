import { locale, waitLocale } from 'svelte-i18n';

import { i18n } from '$lib/i18n/config';
import '$lib/i18n/index.js';

export const load = async ({ url }) => {
	const { pathname: pathName } = url;
	const lang = `${pathName.match(/\w+?(?=\/|$)/) || i18n.defaultLocale}`;

	locale.set(lang);

	await waitLocale();

	return {
		lang: lang
	};
};

export const prerender = true;
