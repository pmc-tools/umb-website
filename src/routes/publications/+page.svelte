<script lang="ts">
	import { formatDate } from '$lib/utils'

	let { data } = $props()
	console.log(data)
</script>
<div class=content>
<section>
	<ul class="pubs">
		{#each data.pubs as pub}
			<li class="pub">
				<a href={pub.slug} class="title">{pub.title}</a>
				<p class=subtitle>{pub.subtitle}</p>
				<p class="date">{formatDate(pub.date)}</p>
				<p class="description">{pub.description}</p>
			</li>
		{/each}
	</ul>
</section>
</div>

<style>
	.pubs {
		display: grid;
		gap: 25px;

		.pub {
			list-style: none;

			&:not(:last-child) {
				border-bottom: 1px solid #555;
				padding-bottom: 25px;
			}

			.title {
				padding: 10px;
				display: block;
				font-size: 20pt;
				text-transform: capitalize;
				border: 1px solid #ff8018;
/* 				border-bottom: 2px solid #ff8018; */
				color: black;
				background-color: #ff8018;
			}

			.title:hover {
/* 				background-color: #ffad69; */
				background-color: rgba(0,0,0,0);
				color: white;
			}

			.subtitle {
				font-size: 15pt;
				font-style: italic;
				color: #ffad69;
			}

			.date {
				color: #aaa;
			}

			.description {
				margin-top: 15px;
			}
		}
	}
</style>
