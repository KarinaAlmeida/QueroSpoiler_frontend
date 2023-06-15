import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../Components/Header/Header.js";
import { postAPI } from "../../services/postSumApi.js";
import { Container, Inputs, Title } from "./postSumStyle.js";


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
  
      const promise = postAPI (post, token);

      promise.then((res) => {
        const postId = res.post;
        alert("livro cadastrado com sucesso!");
        navigate(`/post/${postId}`);
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
    function  handleInputChange(e){
      setPost({...post, [e.target.name]: e.target.value})
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
                onChange = {(e) => handleInputChange(e)}
                required
                />

                <input
                type="text"
                placeholder="Autor(a)"
                value={post.author}
                onChange = {(e) => handleInputChange(e)}
                required
                />
    
                <input
                type="url"
                placeholder="Capa do livro (link)"
                value={post.coverUrl}
                onChange = {(e) => handleInputChange(e)}
                required
                />

                 <input
                type="text"
                placeholder="Resumo"
                value={post.summary}
                onChange = {(e) => handleInputChange(e)}
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