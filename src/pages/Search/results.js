import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../Components/Header/Header.js";
import { searchAPI } from "../../services/searchApi.js";
import { Container, Title, Inputs, SummariesContainer, SummaryCard, SummaryInfo, SummaryText, CoverImage } from "./resultsStyle.js";

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