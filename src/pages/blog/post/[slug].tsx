import fs from "fs";
import path from "path";
import matter from "gray-matter";
import emoji from "remark-emoji";
import hightlight from "remark-highlight.js";

import { serialize } from "next-mdx-remote/serialize";
import { postFilePaths, POSTS_PATH } from "../../../config/mdx";
import { MDXRemote } from "next-mdx-remote";

import { Container, Box } from "@chakra-ui/react";

import Navigation from "@components/Navigation";

interface PostProps {
  source: any;
  frontMatter: any;
}

const PostPage: React.FC<PostProps> = ({ source, frontMatter }) => {
  return (
    <Navigation active="blog">
      <Container bg="white" padding="0" maxW="4xl" shadow="md">
        <Box fontSize="2xl" padding="4" bg="black" color="white" maxW="4xl">
          {frontMatter.title}
        </Box>
        <Box padding="4">
          <MDXRemote {...source} />
        </Box>
      </Container>
    </Navigation>
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
