import { PostDTO } from 'types/post'
import postService from '@services/postService'
import { POSTS_PER_PAGE } from '@config/pagination'

export default async function postsHandler(request, response) {
  const { page, postsPerPage } = request.body

  const posts: PostDTO[] = postService.findPostsByPage(page, postsPerPage)

  return response.send(posts)
}
