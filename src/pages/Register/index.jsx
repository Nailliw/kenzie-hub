import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import React, { useState, useEffect } from "react";
import "./style.css";
import { useHistory } from "react-router-dom";
import { registerUserDataThunk } from "../../store/modules/usersData/thunk";
import { useSelector, useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

const Register = () => {
  let dispatch = useDispatch();
  let token = useSelector((state) => state.UsersDataReducer.loggedUser);
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup
      .string()
      .min(3, "Nome deve conter no mínimo 3 letras")
      .required("Campo obrigatorio"),
    email: yup.string().email("Email invalido").required("Campo obrigatório"),
    bio: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
    course_module: yup.string().required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Senha deve conter no minimo 6 digitos")
      .required("Campo obrigatório"),
    password_confirmation: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas não conferem"),
  });

  const { register, handleSubmit, errors, setError } = useForm({
    resolver: yupResolver(schema),
  });

  const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(0.3),
        width: "80%",
      },
    },
  }));

  const classes = useStyles();

  const handleForm = (data) => {
    console.log(data);
    dispatch(registerUserDataThunk(data));
  };

  return (
    <form onSubmit={handleSubmit(handleForm)} className={classes.root}>
      <h1 className="labelCadastro">Cadastro de usuário</h1>

      <input ref={register} name="name" />
      <input ref={register} name="email" />
      <input ref={register} name="bio" />
      <input ref={register} name="contact" />

      <input ref={register} name="password" />
      <input ref={register} name="password_confirmation" />
      <select name="course_module">
        <option value="">Selecione o Módulo</option>
        <option value="primeira módulo (introdução ao FrontEnd)">
          Primeiro módulo (introdução ao FrontEnd)
        </option>
        <option value="Segundo módulo (FrontEnd Avançado)">
          Segundo módulo (FrontEnd Avançado)
        </option>
        <option value="Terceiro módulo (introdução ao BackEnd)">
          Terceiro módulo (introdução ao BackEnd)
        </option>
        <option value="Quarto módulo (BackEnd Avançado)">
          Quarto módulo (BackEnd Avançado)
        </option>
      </select>

      {/* <TextField
        ref={register}
        id="outlined-search"
        label="E-mail"
        type="search"
        variant="outlined"
        name="email"
        error={!!errors.email?.message}
        helperText="teste"
      /> */}

      {/* <TextField
        required
        ref={register}
        id="outlined-search"
        label="Biografia"
        type="search"
        variant="outlined"
        name="bio"
      /> */}

      {/* <TextField
        required
        ref={register}
        id="outlined-search"
        label="Contato"
        type="search"
        variant="outlined"
        name="contact"
      /> */}

      {/* <TextField
        required
        ref={register}
        id="outlined-search"
        label="Módulo do curso"
        type="search"
        variant="outlined"
        name="course_module"
      /> */}

      {/* <TextField
        required
        ref={register}
        id="outlined-password-input"
        label="Senha"
        type="password"
        autoComplete="current-password"
        variant="outlined"
        name="password"
      /> */}

      {/* <TextField
        required
        ref={register}
        id="outlined-password-input"
        label="Confirmar Senha"
        type="password"
        autoComplete="current-password"
        variant="outlined"
        name="password_confirmation"
      /> */}

      <Button
        type="submit"
        className="LoginButton"
        variant="contained"
        color="primary"
      >
        Cadastrar
      </Button>
      {/* <button type="submit">Cadastrar</button> */}
    </form>
  );
};

export default Register;
