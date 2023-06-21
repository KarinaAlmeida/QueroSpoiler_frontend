import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #a088b8;
  min-height: 100vh;
  margin-top: 0%;
`;

export const PostContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  width: 600px;
  font-family: "Passion One";
  margin-top: 72px; 
  

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const CoverImage = styled.img`
  width: 200px;
  height: 310px;
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

export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 220px); /* Ajusta a largura para ocupar o espaço restante */

  h1 {
    font-size: 25px;
    color: #682da4;
  }
  h2 {
    font-size: 18px;
    color: #8c4bce;
  }

  @media (max-width: 600px) {
    align-items: center;
    text-align: center;
    width: 100%; /* Ajusta a largura para ocupar todo o espaço disponível */
    margin-top: 20px;
  }`;

export const SummaryText = styled.p`
  margin-top: 10px;
  font-size: 20px;
  color: #585858;
  text-align: justify;

  @media (max-width: 600px) {
    text-align: center;
  }
`;

export const NotFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #a088b8;
  min-height: 100vh;
`;

export const NotFoundImage = styled.img`
  width: 120%;
  height: 120%;
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #a088b8;
  min-height: 100vh;
  p {
    width: 70vw;
    font-family: "Passion One";
    font-style: normal;
    font-weight: 700;
    color: #ffffff;
    margin-left: 25%;
    font-size: 100px;
  }
`;

export const FavoriteButton = styled.button`
  background-color: transparent;
  border: none;
  color: #682DA4;
  font-size: 20px;
  cursor: pointer;
  align-self: flex-end; 
  margin-top: -20px;
  margin-right: -3%;

  &:hover {
    color: #8c4bce;
  }
`;