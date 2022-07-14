import React, { useState } from "react";
import logo from "../../assets/logo-future.png";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { goToSignUpAdress } from "../../routes/coordinator";
 import { BASE_URL } from "../../constants/urls";
import axios from "axios";
import { Button, TextField } from "@material-ui/core";
import { SignupContainer, Logo, Title } from "./Styled";

const SignupUserPage = () => {
  const navigate = useNavigate();
  const [confirm, setConfirm] = useState();
  const [form, onChange, clear] = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });

  const onChangeConfirm = (e) => {
    setConfirm(e.target.value);
  };

  const onSubmitForm = (event) => {
    event.preventDefault();

    
    if (form.cpf.length == 11) {
      console.log("CPF com tamanho correto!");
    } else {
      alert("Verificar campo CPF");
    }
    if (form.password !== confirm) {
      alert("Senhas são diferentes!");
    } if (form.password.length < 6) {
      alert("A senha precisa ter pelo menos seis caracteres.");
    }else {
      usuario();
    }
  };

  const usuario = () => {
    axios
      .post(`${BASE_URL}/signup`, form)
      .then((res) => { console.log(res)
        localStorage.setItem("token", res.data.token);
        goToSignUpAdress(navigate);
        clear();
      })
      .catch((err) => alert("Erro no cadastro!"));
  };

  return (
    <SignupContainer>
      <Logo src={logo} />
      <Title>Cadastrar</Title>

      <form onSubmit={onSubmitForm}>
        <TextField
          name={"name"}
          type={"name"}
          value={form.name}
          onChange={onChange}
          label={"Nome"}
          variant={"outlined"}
          fullWidth
          margin={"normal"}
          required
        />
        <TextField
          name={"email"}
          type={"email"}
          value={form.email}
          onChange={onChange}
          label={"E-mail"}
          variant={"outlined"}
          fullWidth
          margin={"normal"}
          required
        />
        <TextField
          name={"cpf"}
          type={"cpf"}
          value={form.cpf}
          onChange={onChange}
          label={"CPF"}
          variant={"outlined"}
          fullWidth
          margin={"normal"}
          required
        />
        <TextField
          name={"password"}
          type={"password"}
          value={form.password}
          onChange={onChange}
          id={"password"}
          label={"Senha"}
          variant={"outlined"}
          fullWidth
          margin={"normal"}
          required
        />
        <TextField
          name={"password"}
          type={"password"}
          value={confirm}
          onChange={onChangeConfirm}
          id={"confirm_password"}
          label={"Confirmar senha"}
          variant={"outlined"}
          fullWidth
          margin={"normal"}
          required
        />

        <Button
          type={"submit"}
          variant={"contained"}
          margin={"normal"}
          fullWidth
          color={"primary"}
        >
          Criar
        </Button>
      </form>
    </SignupContainer>
  );
};

export default SignupUserPage;
