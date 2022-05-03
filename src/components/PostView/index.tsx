import React from 'react'
import { MDXRemote } from 'next-mdx-remote'

import {
  Box,
  Container,
  Tag,
  Link as ChakraLink,
  Text,
  Flex,
} from '@chakra-ui/react'
import { Post } from 'types/post'
import Link from 'next/link'
import PostTag from '@components/PostTag'

interface PostViewProps {
  post: Post
}

const PostView: React.FC<PostViewProps> = ({ post }) => {
  return (
    <Container
      bg="white"
      maxW="4xl"
      shadow="md"
      border="1px"
      borderColor="blackAlpha.100"
      marginBottom="16"
      padding="0"
    >
      <Flex position="relative" bg="black" color="white" padding="1rem">
        <Link href={`/blog/post/${post.slug}`}>
          <Text as="span" fontSize="4xl" fontWeight="bold" cursor="pointer">
            {post.title}
          </Text>
        </Link>
        <Text position="absolute" bottom="0" right="1rem">
          {new Date(post.date).toLocaleDateString('pt-BR', {
            dateStyle: 'medium',
          })}
        </Text>
      </Flex>
      <Box padding="2rem 4rem" fontSize="xl">
        <MDXRemote {...post.source} />
      </Box>
      {post.tags.map((tag) => (
        <PostTag key={tag} tag={tag} />
      ))}
    </Container>
  )
}

export default PostView
