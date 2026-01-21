import type { Post } from '$lib/types'

export async function load({ fetch }) {
	const response = await fetch('/api/standards')
	const standards: Post[] = await response.json()
	return { standards }
}
