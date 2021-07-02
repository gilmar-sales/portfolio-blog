import Link from "next/link";
import { Container, Title, Content, Post, PostTile, Tag } from "./styles";

export default function LastPosts(props) {
  return (
    <Container>
      <Title>Postagens recentes</Title>
      <Content>
        {props.posts.map((post, index) => (
          <Post key={index}>
            <div>
              <Link href={`/blog/post/${post.slug}`}>
                <PostTile>{post.title}</PostTile>
              </Link>
              <small>
                {new Date(post.date).toLocaleDateString("pt-BR", {
                  dateStyle: "long",
                })}
              </small>
            </div>
            <div>
              {post.tags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </div>
          </Post>
        ))}
      </Content>
    </Container>
  );
}
