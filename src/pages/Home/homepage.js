import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Header } from "../../Components/Header/Header.js";

export function Homepage() {
  const [recentSummaries, setRecentSummaries] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    fetchRecentSummaries();
  }, []);

  const fetchRecentSummaries = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/home`);
      setRecentSummaries(response.data);
      console.log(response.data);
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
  margin-left: 30%;

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