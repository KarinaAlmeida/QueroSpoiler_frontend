import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../Components/Header/Header.js";
import { homeAPI } from "../../services/homeApi.js";
import {Container, Title, SummariesContainer, SummaryCard, SummaryInfo, SummaryText, CoverImage} from "./homepageStyle.js";

export function Homepage() {
  const [recentSummaries, setRecentSummaries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchRecentSummaries();
  }, []);

  const fetchRecentSummaries = async () => {
    try {
      const response = await homeAPI();
      setRecentSummaries(response);
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <Container>
      <Header />
      <Title>
        <h1>Resumos Recentes</h1>
      </Title>

      <SummariesContainer>
        {recentSummaries.map((summary) => (
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
    </Container>
  );
}