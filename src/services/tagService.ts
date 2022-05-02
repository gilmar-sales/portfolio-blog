import { postsSlugs, POSTS_PATH } from '@config/mdx'
import matter from 'gray-matter'
import path from 'path'
import fs from 'fs'
import { TagDTO } from 'types/tag'
import { TAGS_PER_PAGE } from '@config/pagination'
import { PostDTO } from 'types/post'

const tagsService = () => {
  const tagsMap: Map<string, TagDTO> = new Map()
  const tagsArray: TagDTO[] = []

  postsSlugs.forEach((postSlug) => {
    const postFilePath = path.join(POSTS_PATH, `${postSlug}.mdx`)
    const source = fs.readFileSync(postFilePath)

    const { content, data } = matter(source)

    data.tags.forEach((tag: string) => {
      if (tagsMap.has(tag)) {
        tagsMap.get(tag).posts.push(data as PostDTO)
      } else {
        const tagDTO: TagDTO = {
          name: tag,
          posts: [data as PostDTO],
        }

        tagsMap.set(tag, tagDTO)
        tagsArray.push(tagDTO)
      }
    })
  })

  return {
    findAllTags: () => {
      return tagsMap
    },
    findTagsByPage: (page: number = 1, tagsPerPage: number = TAGS_PER_PAGE) => {
      const start = tagsPerPage * (page - 1)
      const end = start + tagsPerPage

      return tagsArray.slice(start, end)
    },
    findTagPosts: (
      tag: string,
      page: number = 1,
      postsPerPage: number = TAGS_PER_PAGE,
    ) => {
      const start = postsPerPage * (page - 1)
      const end = start + postsPerPage

      return tagsMap[tag]?.posts.slice(start, end)
    },
  }
}
export default tagsService()
