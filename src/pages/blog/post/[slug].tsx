import { postFilePaths } from '../../../config/mdx'

import Navigation from '@components/Navigation'
import React from 'react'
import Head from 'next/head'
import markdownService from '@services/markdownService'
import PostView from '@components/PostView'
import { Post } from 'types/post'
import postService from '@services/postService'

interface PostProps {
  post: Post
}

const PostPage: React.FC<PostProps> = ({ post }) => {
  return (
    <Navigation active="blog">
      <Head>
        <title>gilmar sales - {post.title}</title>
      </Head>
      <PostView post={post} />
    </Navigation>
  )
}

export const getStaticProps = async ({ params }) => {
  const dto = await postService.findPostBySlug(params.slug)
  const post = await markdownService.render(dto)

  console.log(post);

  return {
    props: { post: post },
  }
}

export const getStaticPaths = async () => {
  const paths = postFilePaths
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}

export default PostPage
