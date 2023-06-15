import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignUpAPI } from "../../services/signUpApi";

export function SignUp() {
    const navigate = useNavigate();
  
    const [register, setRegister] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        picture: "",
      });
  
    const { name, email, password, confirmPassword, picture  } = register;
  
    function registerUser(event) {
      event.preventDefault();
  
      if (name==="" || email === "" || password === "" || confirmPassword === "" || picture==="") {
        return alert("Por favor, preencha todos os dados!");
      }

      if (password !== confirmPassword) {
        return alert ("As senhas devem ser iguais!")
      }

      const promise = SignUpAPI(register);

      promise.then((res) => {
        alert("Usuário cadastrado com sucesso!");
        navigate("/");
      });
  
      promise.catch((err) => {
        console.log(err.response.data);
        alert("Ops! Tente novamente!");
      });
    }

    function  handleInputChange(e){
      setRegister({...register, [e.target.name]: e.target.value})
    }
  

    return (
      <Container>
        <Title>
          <div>
            <h1>QueroSpoiler</h1>
            <h2>Um lugar seguro para dar e receber spoilers de livros.</h2>
          </div>
        </Title>
  
        <Inputs>


          <form onSubmit={registerUser}>
          <input
              type="text"
              placeholder="nome"
              name="name"
              value={register.name}
              onChange = {(e) => handleInputChange(e)}
              required
            />

            <input
              type="email"
              placeholder="e-mail"
              name="email"
              value={register.email}
              onChange = {(e) => handleInputChange(e)}
              required
            />
  
            <input
              type="password"
              placeholder="senha"
              name="password"
              value={register.password}
              onChange = {(e) => handleInputChange(e)}
              required
            />

             <input
              type="password"
              placeholder="confirme senha"
              name="confirmPassword"
              value={register.confirmPassword}
              onChange = {(e) => handleInputChange(e)}
              required
            />

<input
            type="url"
            placeholder="foto url"
            value={register.picture}
            name="picture"
            onChange = {(e) => handleInputChange(e)}
            required
          />
  
            <button type="submit">
              Cadastrar
            </button>
            <p onClick={() => navigate("/")}>
              Já tem uma conta? Clique aqui para logar!
            </p>
          </form>
        </Inputs>
      </Container>
    );
}

const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    @media (max-width: 950px) {
      flex-direction: column;
    }
  `;
  
  const Title = styled.div`
    display: flex;
    flex-direction: column;
    width: 75vw;
    background-color: #232121;
    font-family: "Passion One";
    font-style: normal;
    font-weight: 700;
    color: #ffffff;
    div {
      margin: 220px 0 0 110px;
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
        margin: 10px 0 0 0;
      }
      h1 {
        font-size: 76px;
        line-height: 75px;
        width: 40%;
      }
      h2 {
        text-align: center;
        font-size: 23px;
        line-height: 30px;
        width: 80%;
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
    p {
      font-family: "Lato";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      text-decoration-line: underline;
      color: #ffffff;
      cursor: pointer;
    }
  `;
