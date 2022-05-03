import { serialize } from 'next-mdx-remote/serialize'
import remarkEmoji from 'remark-emoji'
import remarkHighlight from 'remark-highlight.js'
import remarkMath from 'remark-math'
import { Post, PostDTO } from 'types/post'
import postService from './postService'

const markdownService = () => {
  return {
    render: async (postDTO: PostDTO, abstract?: boolean) => {
      const mdxSource = await serialize(
        abstract ? postService.getPostAbstract(postDTO) : postDTO.content,
        {
          mdxOptions: {
            remarkPlugins: [remarkEmoji, remarkHighlight, remarkMath],
            rehypePlugins: [],
          },
          scope: { ...postDTO },
        },
      )

      console.log(mdxSource)

      const post: Post = {
        slug: postDTO.slug,
        title: postDTO.title,
        date: postDTO.date,
        tags: postDTO.tags,
        source: mdxSource,
      }

      return post
    },
  }
}
export default markdownService()
