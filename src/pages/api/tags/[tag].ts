import path from 'path'
import fs from 'fs'
import { POSTS_PATH, postsSlugs } from '../../../config/mdx'

import matter from 'gray-matter'
import tagService from '@services/tagService'

export default async function tagHandler(request, response) {
  const { page, postsPerPage } = request.body
  const { tag } = request.query

  const posts = tagService.findTagPosts(tag, page, postsPerPage)

  return response.send(posts)
}
