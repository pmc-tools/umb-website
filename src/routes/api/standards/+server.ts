import { json } from '@sveltejs/kit'
import type { Post } from '$lib/types'

async function getPosts() {
	let standards: Post[] = []

	const paths = import.meta.glob('/src/specification/*.md', { eager: true })
	console.log(paths)

	for (const path in paths) {
		const file = paths[path]
		const slug = path.split('/').at(-1)?.replace('.md', '')
		// console.log(slug)
		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>
			// console.log("Metadata: ")
			// console.log(metadata)
			const post = { ...metadata, slug } satisfies Post
			post.published && standards.push(post)
		}
	}

	console.log(standards)

	standards = standards.sort((first, second) =>
	new Date(second.date).getTime() - new Date(first.date).getTime()
	)

	return standards
}

export async function GET() {
	const standards = await getPosts()
	return json(standards)
}
