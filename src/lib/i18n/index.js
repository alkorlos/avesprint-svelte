import { init, register } from 'svelte-i18n';

import { i18n } from './config';

register('ru', async () => (await import('./locales/ru/index.js')).ruLocale);
register('en', async () => (await import('./locales/en/index.js')).enLocale);

init({
	fallbackLocale: i18n.defaultLocale,
	initialLocale: i18n.defaultLocale
});
