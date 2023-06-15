import styled from "styled-components";

export const Container = styled.div`
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
    margin-left: 15%;
    font-size: 20px;
    cursor: pointer;
  }
  img {
    border-radius: 20%;
    width: 60px;
    height: 60px;
    margin-right: 3%;
    margin-top: 1%;
    cursor: pointer;

  }

 
`;