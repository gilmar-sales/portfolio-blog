import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1144px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1144px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  background-color: black;
  color: white;
  padding: 1rem;
  width: 100%;
`;

export const Content = styled.div`
  background-color: white;
  width: 100%;
  padding: 1rem;
`;

export const Post = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const PostTile = styled.h1`
  cursor: pointer;
`;

export const Tag = styled.small`
  background-color: black;
  color: white;
  border-radius: 0.2rem;
  padding: 0.1rem;
`;
