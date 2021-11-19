import React from 'react'

import emoji from 'remark-emoji'
import hightlight from 'remark-highlight.js'

import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

import { Box, Container, Tag, Link as ChakraLink, Text } from '@chakra-ui/react'
import { Post } from 'types/post'

interface PostViewProps {
  post: Post
}

const PostView: React.FC<PostViewProps> = ({ post }) => {
  return (
    <Container bg="white" padding="0" maxW="4xl" shadow="md" marginBottom="16">
      <Box
        padding="4"
        bg="black"
        color="white"
        display="flex"
        alignItems="flex-end"
        justifyContent="space-between"
        maxW="4xl"
      >
        <Text as="span" fontSize="4xl" fontWeight="bold" padding="0">
          {post.title}
        </Text>
        <Text as="span">
          {new Date(post.date).toLocaleDateString('pt-BR', {
            dateStyle: 'medium',
          })}
        </Text>
      </Box>
      <Box padding="4" fontSize="xl">
        <MDXRemote {...post.source} />
      </Box>
    </Container>
  )
}

export default PostView
