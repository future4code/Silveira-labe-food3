import React from "react";
import { useNavigate } from "react-router-dom";
import { goToFeed } from "../../routes/coordinator";
import axios from "axios";
import { Button, TextField } from "@material-ui/core";
import { BASE_URL } from "../../constants/urls";
import useForm from "../../hooks/useForm";
import { SignupContainer, Title } from "./Styled";

const SignupAdressPage = () => {
  const navigate = useNavigate();
  const [form, onChange, clear] = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });

  const onSubmitForm = (event) => {
    console.log(form);
    event.preventDefault();
    cadastroDeEndereco();
  };

  const cadastroDeEndereco = () => {
    
    axios
    .put(`${BASE_URL}/address`, form, {
      headers:{
        auth: localStorage.getItem("token")
      }
    })
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      goToFeed(navigate);
      clear();
    })
    .catch((err) => alert("Erro no cadastro de endereço!"));
     }
  

  return (
    <SignupContainer>
      <Title>Meu endereço</Title>
      <div>
        <form onSubmit={onSubmitForm}>
          <TextField
            name={"street"}
            type={"street"}
            value={form.street}
            onChange={onChange}
            label={"Rua/Av."}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
          />
          <TextField
            name={"number"}
            type={"number"}
            value={form.number}
            onChange={onChange}
            label={"Número"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
          />
          <TextField
            name={"complement"}
            type={"complement"}
            value={form.complement}
            onChange={onChange}
            label={"Complemento"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            
          />
          <TextField
            name={"neighbourhood"}
            type={"neighbourhood"}
            value={form.neighbourhood}
            onChange={onChange}
            label={"Bairro"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
          />
          <TextField
            name={"city"}
            type={"city"}
            value={form.city}
            onChange={onChange}
            label={"Cidade"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
          />
          <TextField
            name={"state"}
            type="state"
            value={form.state}
            onChange={onChange}
            label={"Estado"}
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
            Salvar
          </Button>
        </form>
      </div>
    </SignupContainer>
  );
  }

export default SignupAdressPage;
