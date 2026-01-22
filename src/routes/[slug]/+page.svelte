<script lang="ts">
	import { formatDate } from '$lib/utils'

	let { data } = $props()
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>
<div class=content>
<article>
	<hgroup>
		<h1>{data.meta.title}</h1>
		<p class=date>Last updated on {data.meta.date}</p>
	</hgroup>

	<div class="prose">
		<data.content />
	</div>
</article>
</div>
<style>
	article {
		max-inline-size: var(--size-content-3);
		margin-inline: auto;

		h1 {
			text-transform: capitalize;
		}

		h2, .subtitle {
				font-size: 15pt;
				font-style: italic;
				color: #ffad69;
		}

		h1 + p {
			margin-top: 14pt;
		}

		.date {
			color: #aaa;
		}

		.tags {
			display: flex;
			gap: 15px;
			margin-top: 10px;

			.tag {
				padding: 5px 8px;
				color: black;
				background-color: #ff8018;
				border: 1px solid #ff8018;
				transition: all 2s ease;
			}

			.tag:hover {
				background-color: rgba(0,0,0,0);
				color: white;
			}
		}
	}
</style>
