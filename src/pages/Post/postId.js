import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { Header } from "../../Components/Header/Header.js";

export function PostPage() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetchPost();
  }, [postId]);

  
  const fetchPost = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/post/${postId}`);
      setPost(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!post) {
    return <Loading>Loading...</Loading>;
  }

  return (
    <Container>
      <Header />
      <PostContainer>
        <CoverImage src={post.coverUrl} alt="Cover" />
        <PostInfo>
          <h1>{post.title}</h1>
          <h2>Autor(a): {post.author}</h2>
          <SummaryText>{post.summary}</SummaryText>
        </PostInfo>
      </PostContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #a088b8;
  min-height: 100vh;
  margin-top: 5%;
`;

const PostContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  width: 600px;
  font-family: "Passion One";

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const CoverImage = styled.img`
  width: 200px;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 20px;

  @media (max-width: 600px) {
    width: 100%;
    height: auto;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const PostInfo = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 25px;
    color: #682DA4;
  }
  h2 {
    font-size: 18px;
    color: #8c4bce;
  }

  @media (max-width: 600px) {
    align-items: center;
    text-align: center;
  }
`;

const SummaryText = styled.p`
  margin-top: 10px;
  font-size: 20px;
  color: #585858;
  text-align: justify;

  @media (max-width: 600px) {
    text-align: center;
  }
`;

const Loading = styled.p`
  font-size: 20px;
  color: #ffffff;
`;
