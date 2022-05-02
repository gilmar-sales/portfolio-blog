import { postsSlugs, POSTS_PATH } from '@config/mdx'
import matter from 'gray-matter'
import path from 'path'
import fs from 'fs'
import { PostDTO } from 'types/post'
import { POSTS_PER_PAGE } from '@config/pagination'

const postsService = () => {
  const postsArray: PostDTO[] = postsSlugs.map((postSlug) => {
    const postFilePath = path.join(POSTS_PATH, `${postSlug}.mdx`)
    const source = fs.readFileSync(postFilePath)

    const { content, data } = matter(source)

    const post = { ...data, slug: postSlug, content }

    return post
  }) as PostDTO[]

  const postsMap: Map<string, PostDTO> = new Map(
    postsArray.map((post) => [post.slug, post]),
  )

  postsArray.sort((a, b) => (a.date > b.date ? -1 : b.date > a.date ? 1 : 0))

  return {
    findPostBySlug: (slug: string) => {
      return postsMap.get(slug)
    },
    findPostsByTag: (tag: string) => {
      return postsArray.find((post) => post.tags.includes(tag))
    },
    findPostsByPage: (
      page: number = 1,
      postsPerPage: number = POSTS_PER_PAGE,
    ) => {
      const start = postsPerPage * (page - 1)
      const end = start + postsPerPage
      return postsArray.slice(start, end)
    },
    findAllPosts: () => {
      return postsArray
    },
  }
}
export default postsService()
