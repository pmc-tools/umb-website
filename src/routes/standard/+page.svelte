<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { derived } from 'svelte/store';
	import { writable } from 'svelte/store';


	let { data } = $props();
	var searchQuery = writable(''); // Store for search query

	// Creating a derived store for filtered standards
	var filteredStandards = derived(searchQuery, $searchQuery => {
		return data.standards.filter(standard =>
			standard.title.toString().toLowerCase().includes($searchQuery.toString().toLowerCase()) ||
			standard.description.toString().toLowerCase().includes($searchQuery.toString().toLowerCase())
		);
	});

	// Highlight matching text
	function highlightText(text: string, query: string) {
		if (!query) return text;
		const regex = new RegExp(`(${query})`, 'gi');
		return text.split(regex).map(part =>
			part.toString().toLowerCase() === query.toString().toLowerCase()
				? `<span class="highlight">${part}</span>`
				: part
		).join('');
	}
</script>
<div class=content>
<h1>The UMB Standard</h1>
<p>Included below are the sections of the UMB file format standard.</p>
<section>
<input
	type=text
	id="search-bar"
	class="bi bi-search"
	placeholder="Search for a standard..."
	bind:value={$searchQuery}
>
	<ul class="standards">
		{#each data.standards as standard}
<li class="standard">
					<a href="{standard.slug}" class="title" >{highlightText(standard.title, searchQuery)}</a>
					<p class="date">{formatDate(standard.date)}</p>
					<p class="description" >{highlightText(standard.description, searchQuery)}</p>
				</li>
		{/each}
	</ul>
</section>
</div>

<style>
	.highlight {
		background-color: #ffd747;
	}

	#search-bar {
		padding: 8px;
		border: none;
		border-bottom: 1px solid #aaa;
		color: #555;
		display: block;
		width: 100%;
	}

	.standards {
		display: grid;
		gap: 25px;
		padding: 0px;

		.standard {
			list-style: none;

			&:not(:last-child) {
				border-bottom: 1px solid #555;
				padding-bottom: 25px;
			}

			.title {
				display: block;
				font-size: 20pt;
				text-transform: capitalize;
				border-bottom: 2px solid #ffd747;
				color: #363636;
			}

			.title:hover {
				color: #ffd747;
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
