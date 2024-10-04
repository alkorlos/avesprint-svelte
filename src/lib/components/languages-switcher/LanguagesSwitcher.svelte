<div data-sveltekit-preload-data="off">
	{#each i18n.locales as locale}
		{#if $language !== locale.name}
			<a href={locale.href} class="languages-switcher">
				{@html $tp.execute(locale.name)}
			</a>
		{/if}
	{/each}
</div>

<script>
	import { i18n } from '$lib/i18n/config';

	import { getContextLanguage } from '$lib/context/Language.js';
	import { getContextTypograf } from '$lib/context/Typograf.js';

	const language = getContextLanguage();
	const tp = getContextTypograf();
</script>

<style src="./languages-switcher.pcss"></style>
