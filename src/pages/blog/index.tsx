import LastPosts from '@components/LastPosts'
import Navigation from '@components/Navigation'
import postService from '@services/postService'

export default function Blog(props) {
  return (
    <>
      <Navigation active="blog">
        <LastPosts posts={props.posts}></LastPosts>
      </Navigation>
    </>
  )
}

export async function getStaticProps(context) {
  const posts = postService.findAllPosts()

  return {
    props: {
      posts: posts,
    },
  }
}
