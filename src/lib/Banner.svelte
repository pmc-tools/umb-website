<script>
import Button from '$lib/Button.svelte';
</script>

<div id=banner>
	<img id=logo src=/logo.svg height=150px />
	<div>
	<div id=header-text>
	<h2>One MDP format to rule them all.</h2>
	<h4>Simple. Supported. <span class=yellow>Open.</span></h4>
	</div>
	</div>

	<div id=buttons>
<Button href=about>About</Button> <Button href=umbi>Reference Implementation</Button>
</div>
</div>

<style>
#banner {
	width: calc(100% - 20px);
	padding: 100px 10px;
	background-color: black;
	color: white;
	text-align: center;
	background-image: url('/banner.jpg');
	background-size: cover;
	display: flex;
	flex-direction: column;
}

#header-text {
	display: inline-block;
	padding: 10px;
	margin: 30px;
	background-color: #111;
	filter: drop-shadow(12px 12px #ffd747);
}

#header-text h2 {
	font-size: 36pt;
	padding: 0px;
	margin: 0px;

}

#header-text h4 {
	font-size: 20pt;
	padding: 0px;
	margin: 0px;
	font-style: italic;
}

.yellow {
	color: #ffd747;
}

#buttons {
	padding: 30px 0px;
}
</style>
