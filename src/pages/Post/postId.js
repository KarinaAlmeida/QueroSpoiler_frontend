import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../Components/Header/Header.js";
import { getPostAPI } from "../../services/getPostId.js";
import {Container, PostContainer, CoverImage, PostInfo, SummaryText, NotFound, NotFoundImage, Loading, FavoriteButton} from "./postIdStyle.js";
import { AuthContext } from "../../context/AuthContext.js";
import { BsBalloonHeartFill, BsBalloonHeart } from "react-icons/bs";
import { postFavesAPI } from "../../services/postFave.js";
import { userFavesAPI } from "../../services/userFavesApi.js";


export function PostPage() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState({});
  const { isAuthenticated } = useContext(AuthContext);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchPost();
  }, [postId]);

  
  const fetchPost = async () => {
    
    try {
      const response = await getPostAPI(postId)
      setPost(response);
      const posts= post.id
      const favorites= await userFavesAPI(token);

      const faves= favorites.some(
        (favorite) => favorite.id === posts
      )
      setIsFavorite(faves);

    } catch (error) {
      console.log(error);
    } finally{
      setLoading(false);
    }
  };

  const toggleFavorite = async (postId) => {
    try {
      await postFavesAPI(token, postId)
      setIsFavorite((prevFavorites) => ({
      ...prevFavorites,
      [postId]: !prevFavorites[postId]
    }));
    alert("Post favoritado!");
    } catch (error) {
      console.log(error);
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
            {isAuthenticated && ( 
                <FavoriteButton onClick={() => toggleFavorite(postId)} disabled={isFavorite[postId]}>
              {isFavorite[postId] ? <BsBalloonHeartFill /> : <BsBalloonHeart />}
            </FavoriteButton>
            )}
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