import fs from "fs";
import path from "path";
import matter from "gray-matter";
import emoji from "remark-emoji";
import hightlight from "remark-highlight.js";
import "highlight.js/styles/github-gist.css";

import { serialize } from "next-mdx-remote/serialize";
import { postFilePaths, POSTS_PATH } from "../../../config/mdx";
import { MDXRemote } from "next-mdx-remote";

interface PostProps {
  source: any;
  frontMatter: any;
}

const PostPage: React.FC<PostProps> = ({ source, frontMatter }) => {
  return (
    <div>
      <h1>{frontMatter.title}</h1>
      <MDXRemote {...source} />
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [emoji, hightlight],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default PostPage;
