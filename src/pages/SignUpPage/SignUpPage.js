import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignUpAPI } from "../../services/signUpApi";
import {Container, Title, Inputs} from "./SignUpStyle";

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
              placeholder="Nome"
              name="name"
              value={register.name}
              onChange = {(e) => handleInputChange(e)}
              required
            />

            <input
              type="email"
              placeholder="E-mail"
              name="email"
              value={register.email}
              onChange = {(e) => handleInputChange(e)}
              required
            />
  
            <input
              type="password"
              placeholder="Senha"
              name="password"
              value={register.password}
              onChange = {(e) => handleInputChange(e)}
              required
            />

             <input
              type="password"
              placeholder="Confirme a senha"
              name="confirmPassword"
              value={register.confirmPassword}
              onChange = {(e) => handleInputChange(e)}
              required
            />

<input
            type="url"
            placeholder="Foto URL"
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