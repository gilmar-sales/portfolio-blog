import fs from "fs";
import path from "path";

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), "src/posts");

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
// Only include md(x) files
export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  .filter((path) => /\.mdx?$/.test(path));

export const postsSlugs = fs
  .readdirSync(POSTS_PATH)
  .filter((path) => /\.mdx?$/.test(path))
  .map((slug) => slug.replace(".mdx", ""));
