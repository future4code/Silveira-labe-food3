import React from "react";
import { useNavigate } from "react-router-dom";
import { goToFeed } from "../../routes/coordinator";
import axios from "axios";
import { Button, TextField } from "@material-ui/core";
import { BASE_URL } from "../../constants/urls";
import useForm from "../../hooks/useForm";

const LoginForm = () => {
  const navigate = useNavigate();
  const [form, onChange, clear] = useForm({ email: "", password: "" });

  const onSubmitForm = (event) => {
    console.log(form);
    event.preventDefault();
    login();
  };
  const login = () => {
    axios
      .post(`${BASE_URL}/login`, form)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        goToFeed(navigate);
        clear();
      })
      .catch((err) => alert("Usuário não cadastrado!"));
  };

  return (
    <div>
      <div>
        <form onSubmit={onSubmitForm}>
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
            name={"password"}
            type="password"
            value={form.password}
            onChange={onChange}
            label={"Senha"}
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
            Entrar
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
