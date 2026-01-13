<script>
	export let href='';
	export let onclick='';
	export let fontSize='16pt';
</script>

<a class=button href={href} onclick={onclick}>
<slot></slot>
</a>

<style>
	.button {
		background-color: #111;
		padding: 15px 25px;
		margin-right: 10px;
		display: inline-block;
		font-weight: bold;
		color: white;
		border-radius: 25px;
		font-size: 16pt;
	}

	.button:hover {
		border: none;
		filter: drop-shadow(6px 6px #ffd747);
		color: #ffd747;
		background-color: #333;
	}
</style>
