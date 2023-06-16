import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../Components/Header/Header.js";
import { Container, SideMenu, MenuItem,
  SummariesContainer, SummaryCard, SummaryInfo, SummaryText, CoverImage, DeleteButton } from "./UserStyle.js";
import { userPostAPI } from "../../services/userPostApi.js";
import { RiDeleteBin6Line } from "react-icons/ri";
import { deletePostAPI } from "../../services/deletePostApi.js";


export function UserPage() {
  const [showForm, setShowForm] = useState(false);
  const [showPosts, setShowPosts] = useState(false);
  const navigate = useNavigate();
  const [userSummaries, setUserSummaries] = useState([]);


  const fetchUserSummaries = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await userPostAPI(token);
      setUserSummaries(response);
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  };

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("pic");
    navigate("/");
  }

  function handleToggleForm() {
    setShowForm(true);
    setShowPosts(false);
  }

  function handleTogglePosts() {
    setShowPosts(true);
    setShowForm(false);
    fetchUserSummaries();
  }

  const deletePost = async (postId) =>{
    const token = localStorage.getItem("token");
    try {
      await deletePostAPI(token, postId);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <Header />
      <SideMenu>
        <MenuItem onClick={handleTogglePosts}>
          <p>Meus Posts</p>
        </MenuItem>
        <MenuItem onClick={handleToggleForm}>
          <p>Mudar Foto</p>
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <p>Sair</p>
        </MenuItem>
      </SideMenu>

      {showForm && (
        <div>
          {/* Renderizar o formulário Mudar Foto aqui */}
          {/* <ChangePhotoForm /> */}
        </div>
      )}

      {showPosts && (
        <SummariesContainer>
            {userSummaries.map((summary) => (
              <SummaryCard key={summary.id} onClick={() => navigate(`/post/${summary.id}`)}>
                <CoverImage src={summary.coverUrl} alt="Cover" />
                <SummaryInfo>
                  <h1>{summary.title}</h1>
                  <h2>Autor(a): {summary.author}</h2>
                  <SummaryText>{summary.summary}</SummaryText>
                </SummaryInfo>
                <DeleteButton onClick={() => deletePost(summary.id)}>
                  <RiDeleteBin6Line />
                </DeleteButton>
              </SummaryCard>
            ))}
        </SummariesContainer>
      )}
    </Container>
  );
}