import postService from '@services/postService'
import { PostDTO } from 'types/post'

export default async function postsHandler(request, response) {
  const { slug } = request.query

  const post: PostDTO = postService.findPostBySlug(slug)

  return response.send(post)
}
