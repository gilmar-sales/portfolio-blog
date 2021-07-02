import LastPosts from "@components/LastPosts";
import Navigation from "@components/Navigation";

export default function Blog(props) {
  return (
    <>
      <Navigation active="blog">
        <LastPosts posts={props.posts}></LastPosts>
      </Navigation>
    </>
  );
}

export async function getServerSideProps(context) {
  const posts = await (await fetch("http://localhost:3000/api/posts")).json();

  return {
    props: {
      posts: posts,
    },
  };
}
