import { Box, Container, Tag, Link as ChakraLink } from '@chakra-ui/react'
import PostTag from '@components/PostTag'
import Link from 'next/link'
import React from 'react'

import { PostDTO } from 'types/post'

interface LastPostsProps {
  posts: PostDTO[]
}

const LastPosts: React.FC<LastPostsProps> = (props) => {
  return (
    <Container bg="white" padding="0" maxW="4xl" shadow="md">
      <Box fontSize="3xl" padding="4" bg="black" color="white">
        Postagens recentes
      </Box>
      <Box padding="4">
        {props.posts.map((post, index) => (
          <Box
            key={index}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Link href={`/blog/post/${post.slug}`}>
              <ChakraLink fontSize="2xl" fontWeight="extrabold">
                {post.title}
              </ChakraLink>
            </Link>
            <small>
              {new Date(post.date).toLocaleDateString('pt-BR', {
                dateStyle: 'long',
              })}
            </small>
            <div>
              {post.tags.map((tag) => (
                <PostTag key={`tag-${post}-${tag}`} tag={tag} />
              ))}
            </div>
          </Box>
        ))}
      </Box>
    </Container>
  )
}

export default LastPosts
