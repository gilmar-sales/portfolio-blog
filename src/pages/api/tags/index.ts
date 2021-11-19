import path from 'path';
import fs from 'fs';
import { POSTS_PATH, postsSlugs } from '../../../config/mdx';

import matter from 'gray-matter';

export default async function tagsHandler(request, response) {
    const { page, postsPerPage } = request.body;

    const tags = {}

  postsSlugs.forEach((postSlug) => {
    const postFilePath = path.join(POSTS_PATH, `${postSlug}.mdx`);
    const source = fs.readFileSync(postFilePath);

    const { content, data } = matter(source);

    data.tags.forEach((tag) => {
        tags[tag] = tags[tag] ? [...tags[tag], postSlug] : [postSlug];
    })
  });

  return response.send(tags);
}
