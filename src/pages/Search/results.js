import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../Components/Header/Header.js";
import { searchAPI } from "../../services/searchApi.js";

export function SearchSum() {
    const navigate = useNavigate();
  
    const [search, setSearch] = useState({
        title: "",
        author: "",
      });
      const [searchAuthor, setSearchAuthor] = useState(null)
  
    const { title, author} = search;
  
    
    function searchBook(event) {
      event.preventDefault();

        const params = {};

        if (title) {
            params.title = title;
        }
        if (author) {
            params.author = author;
        }

        const promise = searchAPI(params);
      
      promise.then((res) => {
        const result = res;
        const bookQty= result.length;

        if (!bookQty) return alert ("Livro/Autor(a) não encontrado!");

        if (bookQty === 1) {
            const postId = result[0].id;
              navigate(`/post/${postId}`);
        }
        setSearchAuthor(result)

        });
  
      promise.catch((err) => {
        console.log(err.response.data);
      });
    }

    function handleResetSearch() {
        setSearchAuthor(null);
      }

  return (
    <Container>
    <Header onResetSearch={handleResetSearch}/>

    {searchAuthor ? (
       <SummariesContainer>
       {searchAuthor.map((summary) => (
         <SummaryCard key={summary.id} onClick={() => navigate(`/post/${summary.id}`)}>
           
             <CoverImage src={summary.coverUrl} alt="Cover" />
             <SummaryInfo>
               <h1>{summary.title}</h1>
               <h2>Autor(a): {summary.author}</h2>
               <SummaryText>{summary.summary}</SummaryText>
             </SummaryInfo>
         </SummaryCard>
       ))}
     </SummariesContainer>
    ) : (
      <>
      <Title>
        <h1>Pesquise um livro</h1>
      </Title>

      <Inputs>
        <form onSubmit={searchBook}>
            <input
                type="text"
                placeholder="Título"
                value={search.title}
                onChange={(event) =>
                    setSearch({ ...search, title: event.target.value })
                }
                />

                <input
                type="text"
                placeholder="Autor(a)"
                value={search.author}
                onChange={(event) =>
                    setSearch({ ...search, author: event.target.value })
                }
                />
                <button type="submit">
                Pesquisar
                </button>
             </form>
      
      </Inputs>
      </>
      )}

      
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
    width: 80vw;
    box-sizing: border-box;
    padding-left: auto;
    padding-right:auto;
    padding-top: 5vh;

    h1 {
      font-size: 50px;
      line-height: 40px;
    }
  }
`;

const Inputs = styled.div`
@media (max-width: 950px) {
  height: 50vh;
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

const SummariesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1%;
  gap: 30px;
  font-family: "Passion One";

  @media (max-width: 600px) {
    margin-top: 5%;
    padding: 0 10px;
  }
`;

const SummaryCard = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  width: 600px;
  cursor:pointer;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const CoverImage = styled.img`
  width: 200px;
  height: 250px;
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

const SummaryInfo = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 25px;
    color: #682DA4;
  }
  h2 {
    font-size: 18px;
    color: #8c4bce;
  }

  @media (max-width: 600px) {
    align-items: center;
    text-align: center;
  }
`;

const SummaryText = styled.p`
  margin-top: 10px;
  font-size: 20px;
  color: #585858;
  text-align: justify;

  @media (max-width: 600px) {
    text-align: center;
  }
`;