<script>
	import '../app.pcss';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import SocialDropdown from './SocialDropdown.svelte';
</script>

<Navbar let:hidden let:toggle class="bg-black">
	<NavBrand href="/">
		<img src="/logo.webp" class="mr-3 h-16 lg:h-16" alt="Flowbite Logo" />
		<!-- <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"> Herbdiva </span> -->
	</NavBrand>
	<NavHamburger on:click={toggle} />
	<SocialDropdown></SocialDropdown>

</Navbar>

<slot />
