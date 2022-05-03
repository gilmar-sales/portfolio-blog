import LastPosts from '@components/LastPosts'
import Navigation from '@components/Navigation'
import { postsTags } from '@config/mdx'
import tagService from '@services/tagService'
import React from 'react'
import { PostDTO } from 'types/post'

interface TagPageProps {
  posts: PostDTO[]
}

const TagPage: React.FC<TagPageProps> = ({ posts }) => {
  return (
    <Navigation active="blog">
      <LastPosts posts={posts}></LastPosts>
    </Navigation>
  )
}

export const getStaticProps = async ({ params }) => {
  const posts = tagService.findTagPosts(params.tag)
  return {
    props: {
      posts: posts,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = Array.from(tagService.findAllTags().keys()).map((tag) => ({
    params: { tag },
  }))

  return {
    paths,
    fallback: false,
  }
}

export default TagPage
