<svelte:window bind:scrollY={y} on:scroll={handleScroll} />

<header class="header" class:header--unpinned={scrollUp}>
	<div class="header__inner">
		<button
			class="menu__button"
			class:menu__button--active={menuOpen}
			aria-label={$_('common.menu__button')}
			aria-expanded={menuOpen}
			aria-controls="menu-main"
			on:click={() => (menuOpen = !menuOpen)}
		>
			<span class="menu__button-inner"></span>
		</button>

		<a class="logo" href="#section-hero" aria-label={$_('common.logo')}>
			<SvgIcon iconName="logoFocus" />
		</a>

		<MenuMain bind:menuOpen />

		<!-- <div class="header__controls"> -->
			<!-- <button class="button-contact button-contact-open">
				<span class="button-contact__text">
					{@html $tp.execute($_('common.button-contact__text'))}
				</span>
				<SvgIcon iconName="buttonContact" desktopHidden />
			</button> -->

		<LanguagesSwitcher />
		<!-- </div> -->
	</div>
</header>

<script>
	import { _ } from 'svelte-i18n';

	// import { getContextTypograf } from '$lib/context/Typograf.js';

	import MenuMain from '$lib/components/menu-main/MenuMain.svelte';
	import LanguagesSwitcher from '$lib/components/languages-switcher/LanguagesSwitcher.svelte';

	import SvgIcon from '$lib/ui-kit/svg-icon/SvgIcon.svelte';

	// const tp = getContextTypograf();

	let menuOpen = false;

	let y = 0;
	let lastY = 0;
	let scrollUp = false;

	function handleScroll () {
		scrollUp = y > lastY;
		lastY = y;
	}
</script>

<style src="./header.pcss"></style>
