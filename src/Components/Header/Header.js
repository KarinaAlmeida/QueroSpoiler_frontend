import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
// import { useContext, useEffect } from "react";
// import UserContext from "../../contexts/UserContext.js";
import { useState } from "react";
// import axios from "axios";
import React from "react";

export function Header() {
//   const [userResult, setUserResult] = React.useState([]);
//   const picture = localStorage.getItem("picture");
  const [search, setSearch] = useState({ searchText:"" });
  const picture = "https://s2.glbimg.com/K6ATOQWJq-g1Z6pWk3JTCuudiF4=/620x455/e.glbimg.com/og/ed/f/original/2021/01/15/tulipa-dicas-cuidados-plantio.jpg"
  
    const { searchText } = search; 

  

    return (
      <>
        <Container>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <p>QS</p>
          </Link>

          <Link to="/home" style={{ textDecoration: "none" }}>
            <h1>Escreva seu resumo</h1>
          </Link>
          <section>
          {/* <form onSubmit={log}> */}
            <input
              type={"text"}
              data-test="search"
              placeholder="Encontre um livro"
              onChange={(e) => setSearch(e.target.value)}
            ></input>
            {/* </form> */}
          </section>

          
          <div>
            <img alt="icon" src={picture} style={{ marginRight: "30px" }} />
          </div>
          
         

        </Container>
      </>
    );
  
}



const Container = styled.div`
  width: 100%;
  height: 72px;
  background-color: #682DA4;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: calc(100vw / 2 - width/2);
  z-index: 1;
  section {
    input {
      height: 45px;
      border: none;
      background-color: white;
      width: 30vw;
      border-radius: 5px;
      text-align: center;
    }
    ul {
      position: absolute;
      background-color: white;
      margin-top: 5px;
      width: 30vw;
      li {
        display: flex;
        align-items: center;
      }
    }
  }

  p {
    width: 108px;
    height: 54px;
    color: #ffffff;
    font-family: "Passion One";
    font-weight: 700;
    font-style: normal;
    margin-left: 45%;
    font-size: 49px;
    cursor: pointer;
  }
  h1 {
    width: 200px;
    height: 25px;
    color: #ffffff;
    font-family: "Passion One";
    font-weight: 700;
    font-style: normal;
    margin-left: 25%;
    font-size: 20px;
    cursor: pointer;

  }
  img {
    border-radius: 100%;
    width: 53px;
    height: 53px;
    margin-right: 3%;
    margin-top: 1%;
    cursor: pointer;

  }

 
`;