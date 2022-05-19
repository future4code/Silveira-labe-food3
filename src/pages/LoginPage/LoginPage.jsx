import React from "react";
import logo from "../../assets/logo-future.png";
import { useNavigate } from "react-router-dom";
import { goToSignUpUser } from "../../routes/coordinator";
import LoginForm from "./LoginForm";
import Button from "@material-ui/core/Button";
import { LoginContainer, Logo, Title } from "./Styled";





const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div>
    <LoginContainer>
      <Logo src={logo}  />
      <Title>Entrar</Title>
      <LoginForm />
      <div>
        <Button
          type={"submit"}
          variant={"text"}
          margin={"normal"}
          fullWidth
          color={"primary"}
          onClick={() => goToSignUpUser(navigate)}
        >
          Não possui cadastro? Clique aqui.
        </Button>
       
      </div>
      
    </LoginContainer>
    
    </div>
  );
};

export default LoginPage;
