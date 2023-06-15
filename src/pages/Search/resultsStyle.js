import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #a088b8;
  min-height: 100vh;
  margin-top:-2%;
`;

export const Title = styled.div`
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

export const Inputs = styled.div`
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

export const SummariesContainer = styled.div`
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

export const SummaryCard = styled.div`
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

export const CoverImage = styled.img`
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

export const SummaryInfo = styled.div`
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

export const SummaryText = styled.p`
  margin-top: 10px;
  font-size: 20px;
  color: #585858;
  text-align: justify;

  @media (max-width: 600px) {
    text-align: center;
  }
`;