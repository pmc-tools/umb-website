<script>
import Button from '$lib/Button.svelte';
</script>

<div class=content>
<h1>Many Tools Support the UMB Format</h1>

<div class=cards>
<div class=card>
	<a class=tool-logo href=https://stormchecker.org><img class=tool-logo src='/toolLogos/storm.svg' /></a>
	<p>Lorem ipsum something something something.</p>
	<Button href=https://stormchecker.org>Visit Site</Button>
</div>
<div class=card>
	<a class=tool-logo href=#><img class=tool-logo src='/toolLogos/modest.svg' /></a>
	<p>Lorem ipsum something something something.</p>
	<Button href=#>Visit Site</Button>
</div>
<div class=card>
	<a class=tool-logo href=https://prismmodelchecker.org><img class=tool-logo src='/toolLogos/prism.svg' /></a>
	<p>Lorem ipsum something something something.</p>
	<Button href=https://prismmodelchecker.org>Visit Site</Button>
</div>
</div>

</div>

<style>
.cards {
	display: flex;
	flex-direction: column;
}

.card {
	display: block;
	border-bottom: 1px solid #444;
	padding: 20px 0px;
}

.tool-logo {
	width: 200px;
}

.tool-logo:hover {
	border: none;
}
</style>
