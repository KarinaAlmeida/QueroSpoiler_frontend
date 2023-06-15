import { Link } from "react-router-dom";
import React from "react";
import {Container} from "./HeaderStyle";

export function Header({ onResetSearch }) {
  const picture = localStorage.getItem("pic");

    return (
      <>
        <Container>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <p>QS</p>
          </Link>

          <Link to="/post" style={{ textDecoration: "none" }}>
            <h1>Escreva seu resumo</h1>
          </Link>

          <Link to="/results" style={{ textDecoration: "none" }}>
            <h1 onClick={onResetSearch}>Pesquise um livro</h1>
          </Link>
          
          <div>
            <img alt="icon" src={picture} style={{ marginRight: "30px" }} />
          </div>
          
         

        </Container>
      </>
    );
  
}