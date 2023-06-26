import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    @media (max-width: 950px) {
      flex-direction: column;
    }
  `;
  
  export const Title = styled.div`
    display: flex;
    flex-direction: column;
    width: 90vw;
    background: linear-gradient(to right, #682DA4, #A088B8);
    font-family: "Passion One";
    font-style: normal;
    font-weight: 700;
    color: #ffffff;
    div {
      margin: 220px 0 0 5%;
    }
    h1 {
      font-size: 106px;
      line-height: 117px;
      width: 233px;
    }
    h2 {
      font-family: "Oswald";
      font-weight: 700;
      font-size: 43px;
      line-height: 64px;
      width: 500px;
      margin-left: 2%;
    }
    @media (max-width: 950px) {
      width: 100%;
      align-items: center;
      box-sizing: border-box;
      padding: 20px;
      
      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 12px 10% 0 0;
      }
      h1 {
        font-size: 76px;
        line-height: 75px;
        width: 40%;
        margin-left:-34%;
      }
      h2 {
        text-align: center;
        font-size: 23px;
        line-height: 30px;
        width: 80%;
        margin-left: 8%;
      }
      
    }
  `;
  
  export const Inputs = styled.div`
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
    p {
      font-family: "Lato";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      text-decoration-line: none;
      color: #ffffff;
      cursor: pointer;
    }
  `;
