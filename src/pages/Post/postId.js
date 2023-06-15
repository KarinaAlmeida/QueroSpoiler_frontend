import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../Components/Header/Header.js";
import { getPostAPI } from "../../services/getPostId.js";
import {Container, PostContainer, CoverImage, PostInfo, SummaryText, NotFound, NotFoundImage, Loading} from "./postIdStyle.js";

export function PostPage() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPost();
  }, [postId]);

  
  const fetchPost = async () => {
    try {
      const response = await getPostAPI(postId)
      setPost(response);
    } catch (error) {
      console.log(error);
    } finally{
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading><p>Loading...</p></Loading>;
  }

  return (
    <Container>
      <Header />
      {post ? (
        <PostContainer>
          <CoverImage src={post.coverUrl} alt="Cover" />
          <PostInfo>
            <h1>{post.title}</h1>
            <h2>Autor(a): {post.author}</h2>
            <SummaryText>{post.summary}</SummaryText>
          </PostInfo>
        </PostContainer>
      ) : (
        <NotFound>
          <NotFoundImage src="https://media.istockphoto.com/id/1149316411/pt/vetorial/concept-404-error-page-flat-cartoon-style-vector-illustration.jpg?s=612x612&w=0&k=20&c=TKPMbf6SWanZGU6HRPBx_hApHEkNQbhKHbuyLzh82c8=" alt="Loading" />
        </NotFound>
      )}
    </Container>
  );
}