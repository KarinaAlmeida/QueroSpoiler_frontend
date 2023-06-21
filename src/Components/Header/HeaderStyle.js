import styled from "styled-components";
import { RiBearSmileFill } from "react-icons/ri";

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

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  p {
    width: 104px;
    height:50px;
    color: #ffffff;
    font-family: "Passion One";
    font-weight: 400;
    font-style: normal;
    margin-left: 4%;
    font-size: 25px;
    cursor: pointer;
  }
`;

export const DropMenu = styled.div`
  position: absolute;
  top: 106%;
  right: 2%;
  background-color: #682DA4;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 25px;
  z-index: 2;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

export const ModalContent = styled.div`
  position: relative;
  width: 20%;
  height: 20%;
  background-color: #bebebe;
  padding-left: 5%;
  padding-top: 3%;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 2;
`;

export const ModalTitle = styled.h2`
  font-family: "Passion One";
  font-weight: 400;
  font-style: normal;
  font-size: 20px;
  color: #000;
`;

export const ModalButton = styled.button`
  font-family: "Passion One";
  font-weight: 400;
  font-style: normal;
  font-size: 20px;
  margin-top: 7%;
  margin-inline: 2%;
  background-color: #682DA4; 
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 9px 16px;
`;

export const StyledIcon = styled(RiBearSmileFill)`
  color: white;
  font-size: 28px;
  margin-right: 10px;
  cursor:pointer;
  `;