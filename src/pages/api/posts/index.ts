import path from 'path'
import fs from 'fs'
import { POSTS_PATH, postsSlugs } from '../../../config/mdx'

import matter from 'gray-matter'
import { PostDTO } from 'types/post'

export default async function postsHandler(request, response) {
  const { page, postsPerPage } = request.body

  const posts: PostDTO[] = postsSlugs.map((postSlug) => {
    const postFilePath = path.join(POSTS_PATH, `${postSlug}.mdx`)
    const source = fs.readFileSync(postFilePath)

    const { content, data } = matter(source)

    const post = { ...data, slug: postSlug, content }

    return post
  }) as PostDTO[]

  posts.sort((a, b) => (a.date > b.date ? -1 : b.date > a.date ? 1 : 0))

  return response.send(posts)
}
