import type { Post } from '$lib/types'

export async function load({ fetch }) {
	const response = await fetch('/api/pubs')
	const pubs: Post[] = await response.json()
	return { pubs }
}
