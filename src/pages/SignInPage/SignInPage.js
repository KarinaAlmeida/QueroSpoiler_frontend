import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginAPI } from "../../services/loginApi";
import { Container, Title, Inputs } from "./SignInStyle";
import { AuthContext } from "../../context/AuthContext";


export function Login() {
    const navigate = useNavigate();
    const [logar, setLogar] = useState({ email: "", password: "" });
    const { email, password } = logar;
    const { setIsAuthenticated } = useContext(AuthContext);

  
    function log(event) {
      event.preventDefault();
  
      if (email === "" || password === "") {
        return alert("Por favor, preencha todos os dados!");
      }
  
      const promise = LoginAPI(logar);

      promise.then((res) => {
        localStorage.setItem("token", res.user.token);
        localStorage.setItem("pic", res.user.pic);
        setIsAuthenticated(true);
        alert("Usuário logado com sucesso!");
        navigate("/home");
      });
  
      promise.catch((err) => {
        console.log(err.response.data);
        alert("Ops! Tente novamente!");
      });
    }

   function  handleInputChange(e){
      setLogar({...logar, [e.target.name]: e.target.value})
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
          <form onSubmit={log}>
            <input
              type="email"
              placeholder="E-mail"
              name="email"
              value={logar.email}
              onChange = {(e) => handleInputChange(e)}
              required
            />
  
            <input
              type="password"
              placeholder="Senha"
              name="password"
              value={logar.password}
              onChange = {(e) => handleInputChange(e)}
              required
            />
  
            <button type="submit" data-test="login-btn">
              Login
            </button>
            <p onClick={() => navigate("/signup")}>
              Primeira vez? Cadastre-se aqui!
            </p>
          </form>
        </Inputs>
      </Container>
    );
  }