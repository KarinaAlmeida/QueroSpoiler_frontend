import styled from "styled-components";
// import axios from "axios";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Header } from "../../Components/Header/Header.js";

export function Homepage() {
    
    return (
      
      <Container>
        <Header />
        <Title>
            <h1>Resumos Recentes</h1>
        </Title>
      </Container>
    )
}



export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #A088B8;
  min-height: 100vh;
  margin-top:30px;
`;

const Title = styled.div`
    display: flex;
    flex-direction: row;
    width: 70vw;
    font-family: "Passion One";
    font-style: normal;
    font-weight: 700;
    color: #ffffff;
    
    h1 {
      font-size: 40px;
      line-height: 200px;
    }
   
    @media (max-width: 950px) {
      width: 100%;
      /* align-items: center; */
      box-sizing: border-box;
      padding-left: 20%;
      padding-top:10%;
    
      h1 {
        font-size: 50px;
        line-height: 50px;
      }
    }
  `;