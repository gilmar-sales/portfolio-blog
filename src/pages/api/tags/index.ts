import path from 'path'
import fs from 'fs'
import { POSTS_PATH, postsSlugs } from '../../../config/mdx'

import matter from 'gray-matter'
import tagService from '@services/tagService'

export default async function tagsHandler(request, response) {
  const { page, tagsPerPage } = request.body

  const tags = tagService.findTagsByPage(page, tagsPerPage)

  return response.send(tags)
}
