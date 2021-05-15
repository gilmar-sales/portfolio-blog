import LastPosts from "@components/LastPosts";
import Navigation from "@components/Navigation";

export default function Blog() {
  return (
    <>
      <Navigation active="blog">
        <LastPosts />
      </Navigation>
    </>
  );
}
