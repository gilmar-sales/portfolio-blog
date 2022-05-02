import matter from 'gray-matter'
import emoji from 'remark-emoji'
import hightlight from 'remark-highlight.js'

import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

import Head from 'next/head'
import {
  Box,
  Image,
  Heading,
  Text,
  keyframes,
  Container,
} from '@chakra-ui/react'

import Navigation from '@components/Navigation'
import PostView from '@components/PostView'
import { PostDTO } from 'types/post'
import React from 'react'
import postService from '@services/postService'

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

export default function Home(props) {
  return (
    <Navigation active="home">
      <Box display="flex">
        <Box position="relative">
          <Box
            top="0"
            left="0"
            position="relative"
            bg="url(/bubble.svg)"
            bgSize={'200px 200px'}
            width={200}
            height={200}
            padding={6}
            animation={`${spin} infinite 15s linear`}
          ></Box>
          <Image
            position="absolute"
            top="5"
            left="5"
            width="40"
            borderRadius="50%"
            src="https://avatars2.githubusercontent.com/u/7975964"
            alt="gilmar Sales"
          />
        </Box>
        <Box>
          <Heading>Gilmar Sales</Heading>
          <Text fontWeight="bold">Estudante de Ciência da Computação</Text>
        </Box>
        <Box></Box>
      </Box>
      <Box>
        {props.posts.map((post) => (
          <PostView key={post.slug} post={post} />
        ))}
      </Box>
    </Navigation>
  )
}

export const getStaticProps = async ({ params }) => {
  const postsDTOs: PostDTO[] = postService.findAllPosts()

  const posts = await Promise.all(
    postsDTOs.map(async (postDTO) => {
      const { content: postContent, ...rest } = postDTO
      const { content, data } = matter(postContent)

      const mdxSource = await serialize(content, {
        mdxOptions: {
          remarkPlugins: [emoji, hightlight],
          rehypePlugins: [],
        },
        scope: data,
      })

      return {
        ...rest,
        source: mdxSource,
      }
    }),
  )

  return {
    props: {
      posts,
    },
  }
}
