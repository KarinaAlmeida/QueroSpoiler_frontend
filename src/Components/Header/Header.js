import { Link, useNavigate } from "react-router-dom";
import React, { useState, useContext } from "react";
import { Container, MenuContainer, DropMenu, ModalContainer, ModalContent, ModalTitle, ModalButton, StyledIcon } from "./HeaderStyle";
import { AuthContext } from "../../context/AuthContext";

export function Header({ onResetSearch }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [userChoice, setUserChoice] = useState(null);
  const [profilePicture, setProfilePicture] = useState(localStorage.getItem("pic") || "");  
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(AuthContext);

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("pic");
    setIsAuthenticated(false);
    navigate("/");
  }

  function handleIconClick() {
    if (!token || !profilePicture) {
      setModalIsOpen(true);
    }else{
      setOpenMenu(!openMenu)
    }
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  function handleModalConfirmation() {
    setUserChoice("redirect");
    closeModal();
  }

  function handleModalCancellation() {
    setUserChoice("close");
    closeModal();
  }

  function handleUserChoice() {
    if (userChoice === "redirect") {
      navigate("/");
    }
  }
  function handleWriteSummary() {
    if (!token) {
    alert("Você precisa estar logado para escrever um resumo.");  
    navigate("/")
  }else {
    navigate("/post")
  }
}

  return (
    <>
      <Container>
        <Link to="/home" style={{ textDecoration: "none" }}>
          <p>QS</p>
        </Link>

        <div onClick={handleWriteSummary} style={{ textDecoration: "none" }}>
          <h1>Escreva seu resumo</h1>
        </div>

        <Link to="/results" style={{ textDecoration: "none" }}>
          <h1 onClick={onResetSearch}>Pesquise um livro</h1>
        </Link>
        <MenuContainer>
        <div>
          {profilePicture ? (
            <img
              onClick={handleIconClick}
              alt="icon"
              src={profilePicture}
              style={{ marginRight: "30px" }}
            />
          ) : (
            <div onClick={handleIconClick}>
             <StyledIcon />
            </div>
          )}
        </div>

          {openMenu && (
            <DropMenu>
              <Link to="/user" style={{ textDecoration: "none" }}>
                <p>Meu Perfil</p>
              </Link>
              <p onClick={handleLogout}>Sair</p>
            </DropMenu>
          )}
        </MenuContainer>
      </Container>


      {modalIsOpen && (
      <ModalContainer>
        <ModalContent>
          <ModalTitle>Deseja fazer login?</ModalTitle>
          <ModalButton onClick={handleModalConfirmation}>Sim</ModalButton>
          <ModalButton onClick={handleModalCancellation}>Não</ModalButton>
        </ModalContent>
      </ModalContainer>
    )}

      {handleUserChoice()}
    </>
  );
}