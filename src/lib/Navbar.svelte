
<script>
	import { onMount } from "svelte";

	// Show mobile icon and display menu
	let showMobileMenu = false;

	// List of navigation items
	const navItems = [
		// { label: "Home", href: "/" },
		// { label: "About", href: "/about" },
		{ label: "UMBI", href: "/umbi" },
		// { label: "Publications", href: "/publications" },
		{ label: "Tools", href: "/tools" },
		{ label: "Observatory", href: "/observatory" },
		{ label: "Standard", href: "/standard" },
	];

	// Mobile menu click event handler
	const handleMobileIconClick = () => (showMobileMenu = !showMobileMenu);

	// Media match query handler
	const mediaQueryHandler = e => {
		// Reset mobile state
		if (!e.matches) {
			showMobileMenu = false;
		}
	};

	// Attach media query listener on mount hook
	onMount(() => {
		const mediaListener = window.matchMedia("(max-width: 767px)");

		mediaListener.addListener(mediaQueryHandler);
	});


</script>

<nav>
	<div class="inner">
		<div id=logo-container><img src="/logo_flat.svg" height=30px id=logo-icon /><a id=logo href=/>UMB</a></div>
		<div on:click={handleMobileIconClick} class={`mobile-icon${showMobileMenu ? ' active' : ''}`}>
			<div class="middle-line"></div>
		</div>
		<ul class={`navbar-list${showMobileMenu ? ' mobile' : ''}`}>
			<!-- Do not show the home button when not in mobile -->
			<li id=logo-mobile><a href=/>Home</a></li>
			{#each navItems as item}
				<li>
					<a href={item.href}>{item.label}</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>

<style>

nav {
	background-color: #ffd747;
	font-family: "Orbitron", sans-serif;
	font-weight: 600;
	border-bottom: 36px solid #191919;
	height: 75px;
	position: sticky;
	top: 0px;
	z-index: 999;
}

.inner {
	max-width: 1080px;
	padding-left: 20px;
	padding-right: 20px;
	margin: auto;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	height: 100%;
	justify-content: space-around;
}

.mobile-icon {
	width: 25px;
	height: 14px;
	position: relative;
	cursor: pointer;
	justify-content: right;
}

.mobile-icon:after,
.mobile-icon:before,
.middle-line {
	content: "";
	position: absolute;
	width: 100%;
	height: 2px;
	background-color: #191919;
	transition: all 0.4s;
	transform-origin: center;
}

.mobile-icon:before,
.middle-line {
	top: 0;
}

.mobile-icon:after,
.middle-line {
	bottom: 0;
}

.mobile-icon:before {
	width: 100%;
}

.mobile-icon:after {
	width: 100%;
}

.middle-line {
	margin: auto;
}

.mobile-icon:hover:before,
.mobile-icon:hover:after,
.mobile-icon.active:before,
.mobile-icon.active:after,
.mobile-icon.active .middle-line {
	width: 100%;
}

.mobile-icon.active:before,
.mobile-icon.active:after {
	top: 50%;
	transform: rotate(-45deg);
}

.mobile-icon.active .middle-line {
	transform: rotate(45deg);
}

.navbar-list {
	display: none;
	width: 100%;
	justify-content: right;
	margin: 0;
	padding: 0 40px;
}

.navbar-list.mobile {
	background-color: #ffd747;
	position: fixed;
	display: block;
	height: calc(100% - 65px);
	bottom: 0;
	left: 0;
}

.navbar-list li {
	list-style-type: none;
	position: relative;
	display: block;
}

.navbar-list li:before {
	content: "";
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 1px;
	background-color: #0c0c1100;
}

.navbar-list a {
	padding: 12px 20px;
	margin: 0px 10px;
	color: #191919;
	text-decoration: none;
	display: flex;
	align-items: center;
	font-size: 16px;
	transition: all 0.5s ease;
}

#logo-mobile {
	display: block;
}

#logo-container, #logo {
/* 	display: none; */
	font-size: 24pt;
	color: #191919;
	min-width: 120px;
}

#logo-icon {
	padding: 5px 10px;
}

#logo {
	text-decoration: none;
	transition: all 1s ease;
}

#logo:hover {
	border-bottom: none;
	color: #191919;
}

.navbar-list a:hover {
	border-bottom: 2px solid #191919;
	color: #191919;
}

@media only screen and (min-width: 767px) {
	#logo-mobile {
		display: none;
	}
	#logo-container, #logo {
		display: flex;
	}
	.inner {
		padding-left: 45px;
		padding-right: 45px;
	}
	.mobile-icon {
		display: none;
	}

	.navbar-list {
		display: flex;
		padding: 0;
	}

	.navbar-list a {
		display: inline-flex;
		border: 2px solid #ffd747;
	}
}
</style>
