import { Box, Image, Heading, Text, keyframes } from '@chakra-ui/react'
import Navigation from '@components/Navigation'
import PostView from '@components/PostView'
import { PostDTO } from 'types/post'
import React from 'react'
import postService from '@services/postService'
import markdownService from '@services/markdownService'

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
            bgSize={'300px 300px'}
            width={300}
            height={300}
            animation={`${spin} infinite 15s linear`}
          ></Box>
          <Image
            position="absolute"
            top="10%"
            left="10%"
            width="80%"
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
    postsDTOs.map((postDTO) => markdownService.render(postDTO)),
  )

  return {
    props: {
      posts,
    },
  }
}
