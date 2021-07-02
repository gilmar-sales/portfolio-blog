import path from "path";
import fs from "fs";
import { POSTS_PATH, postsSlugs } from "../../../config/mdx";

import matter from "gray-matter";
import "highlight.js/styles/github-gist.css";

export default async function postsHandler(request, response) {
  const { page, postsPerPage } = request.body;

  const posts = postsSlugs.map((postSlug) => {
    const postFilePath = path.join(POSTS_PATH, `${postSlug}.mdx`);
    const source = fs.readFileSync(postFilePath);

    const { content, data } = matter(source);

    const post = { ...data, slug: postSlug, content };

    return post;
  });

  return response.send(posts);
}
