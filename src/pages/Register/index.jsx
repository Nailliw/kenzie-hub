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
      .min(3, "Name must contain at least 3 letters")
      .required("Required field"),
    email: yup.string().email("Email invalido").required("Required field"),
    bio: yup.string().required("Required field"),
    contact: yup.string().required("Required field"),
    course_module: yup.string().required("Required field"),
    password: yup
      .string()
      .min(6, "password must contain at least 6 digits")
      .required("Required field"),
    password_confirmation: yup
      .string()
      .oneOf([yup.ref("password")], "passwords don't match"),
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
    dispatch(registerUserDataThunk(data, setError));
  };

  return (
    <form onSubmit={handleSubmit(handleForm)} className={classes.root}>
      <h1 className="labelCadastro">User register</h1>

      {/* <input ref={register} name="name" />
      <input ref={register} name="email" />
      <input ref={register} name="bio" />
      <input ref={register} name="contact" />
      <input ref={register} name="password" />
      <input ref={register} name="password_confirmation" /> */}

      <TextField
        variant="outlined"
        label="Name"
        name="name"
        margin="dense"
        type="string"
        inputRef={register}
        error={!!errors.name}
        helperText={errors.name?.message}
      />

      <TextField
        variant="outlined"
        label="E-mail"
        name="email"
        margin="dense"
        type="email"
        inputRef={register}
        error={!!errors.email}
        helperText={errors.email?.message}
      />

      <TextField
        variant="outlined"
        label="
        Biography"
        name="bio"
        margin="dense"
        type="string"
        inputRef={register}
        error={!!errors.bio}
        helperText={errors.bio?.message}
      />

      <TextField
        variant="outlined"
        label="Contact"
        name="contact"
        margin="dense"
        type="string"
        inputRef={register}
        error={!!errors.contact}
        helperText={errors.contact?.message}
      />

      <TextField
        variant="outlined"
        label="Password"
        name="password"
        margin="dense"
        type="password"
        inputRef={register}
        error={!!errors.password}
        helperText={errors.password?.message}
      />

      <TextField
        variant="outlined"
        label="Password Confirme"
        name="password_confirmation"
        margin="dense"
        type="password"
        inputRef={register}
        error={!!errors.password_confirmation}
        helperText={errors.password_confirmation?.message}
      />

      <select ref={register} name="course_module">
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
      <p>{errors.course_module?.message}</p>

      <Button
        type="submit"
        className="LoginButton"
        variant="contained"
        color="primary"
      >
        Cadastrar
      </Button>
      <p style={{ color: "red" }}>{errors.registerError?.message}</p>
    </form>
  );
};

export default Register;
