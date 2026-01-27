import type { Post } from '$lib/types'
import base from '$app/paths';

export async function load({ fetch }) {
	const response = await fetch(base + '/api/standards')
	const standards: Post[] = await response.json()
	return { standards }
}
