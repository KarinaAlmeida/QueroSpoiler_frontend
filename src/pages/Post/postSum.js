import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Header } from "../../Components/Header/Header.js";

export function PostSum() {
    const navigate = useNavigate();
  
    const [post, setPost] = useState({
        title: "",
        author: "",
        coverUrl: "",
        summary: "",
      });
  
    const { title, author, coverUrl, summary  } = post;
  
    function registerBook(event) {
      event.preventDefault();
  
      if (title==="" || author === "" || coverUrl === "" || summary === "") {
        return alert("Por favor, preencha todos os campos!");
      }

      const token = localStorage.getItem("token");
  
      const promise = axios.post(`${process.env.REACT_APP_API_BASE_URL}/post`, post, {
        headers: {
            Authorization: `Bearer ${token}`
        },
      });
      promise.then((res) => {
        const postId = res.data.post;
        console.log(res.data);
        alert("livro cadastrado com sucesso!");
        navigate(`/post/${postId}`);
        // navigate("/home"); 
      });
  
      promise.catch((err) => {
        if (err.response.status === 401) {
            alert("Acesso não autorizado! Por favor, faça login novamente.");
            navigate("/");
          } else {
            console.log(err.response.data);
            alert("Ops! Tente novamente!");
          }
      });
    }

  return (
    <Container>
      <Header />
      <Title>
        <h1>Insira um resumo</h1>
      </Title>

      <Inputs>
        <form onSubmit={registerBook}>
            <input
                type="text"
                placeholder="Título"
                value={post.title}
                onChange={(event) =>
                    setPost({ ...post, title: event.target.value })
                }
                required
                />

                <input
                type="text"
                placeholder="Autor(a)"
                value={post.author}
                onChange={(event) =>
                    setPost({ ...post, author: event.target.value })
                }
                required
                />
    
                <input
                type="url"
                placeholder="Capa do livro (link)"
                value={post.coverUrl}
                onChange={(event) =>
                    setPost({ ...post, coverUrl: event.target.value })
                }
                required
                />

                 <input
                type="text"
                placeholder="Resumo"
                value={post.summary}
                onChange={(event) =>
                setPost({ ...post, summary: event.target.value })
                }
                required
                />
    
                <button type="submit">
                Cadastrar livro
                </button>
             </form>
      
      </Inputs>

      
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

const Title = styled.div`
  display: flex;
  width: 70vw;
  font-family: "Passion One";
  font-style: normal;
  font-weight: 700;
  color: #ffffff;
  margin-left: 41%;

  h1 {
    font-size: 50px;
    line-height: 200px;
  }
  
  @media (max-width: 950px) {
    width: 100%;
    box-sizing: border-box;
    padding-left: 3%;
    padding-top: 10%;

    h1 {
      font-size: 50px;
      line-height: 40px;
    }
  }
`;

const Inputs = styled.div`
@media (max-width: 950px) {
  height: 100vh;
  width: 100vw;
  form {
    margin: auto;
    width: 100vw;
    input {
      width: 90%;
    }
    button {
      width: 90%;
    }
  }
}
display: flex;
flex-direction: column;
align-items: center;
font-family: "Oswald";
font-weight: 700;
gap: 0px;
width: 50vw;
background-color: #A088B8;
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  gap: 10px;
}
input {
  width: 30vw;
  height: 80px;
  border-radius: 6px;
  font-family: "Oswald";
  font-size: 27px;
  color: #9f9f9f;
  padding: 18px;
  border-radius: 6px;
  border: none;
  box-sizing: border-box;
}
button {
  width: 30vw;
  height: 65px;
  background: #682DA4;
  border-radius: 6px;
  font-family: "Oswald";
  font-weight: 700;
  font-size: 27px;
  color: #ffffff;
  border-color: transparent;
  cursor: pointer;
  border-radius: 6px;
  border: none;
}
`;

