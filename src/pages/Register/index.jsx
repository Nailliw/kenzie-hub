import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  registerUserDataThunk,
  loginUserThunk,
  getUsersThunk,
  selectUserThunk,
  addUserTechThunk,
  setUsersFiltersThunk,
} from "../../store/modules/usersData/thunk";
import { useSelector, useDispatch } from "react-redux";

const Register = () => {
  let dispatch = useDispatch();
  let token = useSelector((state) => state.UsersDataReducer.loggedUser);

  const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(0.3),
        width: "80%",
      },
    },
  }));

  const classes = useStyles();

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Bio, setBio] = useState("");
  const [Contact, setContact] = useState("");
  const [CourseModule, setCourseModule] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleBio = (e) => {
    setBio(e.target.value);
  };

  const handleContact = (e) => {
    setContact(e.target.value);
  };

  const handleCourseModule = (e) => {
    setCourseModule(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleNameErrors = () => {
    if (Name.length === 0) {
      return "Nome deve ser preenchido";
    }
    return null;
  };

  const handleEmailErrors = () => {
    let verificaEmail = Email.match(/@{1}/);
    if (Email.length === 0) {
      return "E-mail deve ser preenchido";
    }
    if (verificaEmail === null) {
      return "E-mail incorreto!";
    }
    return null;
  };

  const handleBioErrors = () => {
    if (Bio.length === 0) {
      return "A biografia deve ser preenchida";
    }
    return null;
  };

  const handleContactErrors = () => {
    if (Contact.length === 0) {
      return "Contato deve ser preenchido";
    }
    return null;
  };

  const handleCourseModuleErrors = () => {
    if (CourseModule.length === 0) {
      return "O módulo do curso deve ser preenchido";
    }
    return null;
  };

  const handlePasswordErrors = () => {
    if (Password.length === 0) {
      return "";
    }
    if (Password.length < 6) {
      return "A senha deve ter mais de 6 caracteres!";
    }
    return null;
  };

  const handleConfirmarSenhaErrors = () => {
    if (ConfirmPassword.length === 0) {
      return "";
    }
    if (ConfirmPassword !== Password) {
      return "Senha está diferente deste campo de confirmação.";
    }

    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email: Email,
      password: Password,
      name: Name,
      bio: Bio,
      contact: Contact,
      course_module: CourseModule,
    };

    console.log(handleNameErrors());
    if (
      handleNameErrors() === null &&
      handleEmailErrors() === null &&
      handleBioErrors() === null &&
      handleContactErrors() === null &&
      handleCourseModuleErrors() === null &&
      handlePasswordErrors() === null &&
      handleConfirmarSenhaErrors() === null
    ) {
      dispatch(registerUserDataThunk(userData));
    }
  };

  return (
    <form onSubmit={handleSubmit} className={classes.root}>
      <h1 className="labelCadastro">Cadastro de usuário</h1>

      <TextField
        required
        id="outlined-search"
        label="Nome"
        type="search"
        variant="outlined"
        name="email"
        onChange={handleName}
      />
      <p style={{ color: "red" }}>
        {handleNameErrors() != null && handleNameErrors()}
      </p>

      <TextField
        required
        id="outlined-search"
        label="E-mail"
        type="search"
        variant="outlined"
        name="email"
        onChange={handleEmail}
      />
      <p style={{ color: "red" }}>
        {handleEmailErrors() != null && handleEmailErrors()}
      </p>

      <TextField
        required
        id="outlined-search"
        label="Biografia"
        type="search"
        variant="outlined"
        name="email"
        onChange={handleBio}
      />
      <p style={{ color: "red" }}>
        {handleBioErrors() != null && handleBioErrors()}
      </p>

      <TextField
        required
        id="outlined-search"
        label="Contato"
        type="search"
        variant="outlined"
        name="contact"
        onChange={handleContact}
      />
      <p style={{ color: "red" }}>
        {handleContactErrors() != null && handleContactErrors()}
      </p>

      <TextField
        required
        id="outlined-search"
        label="Módulo do curso"
        type="search"
        variant="outlined"
        name="contact"
        onChange={handleCourseModule}
      />
      <p style={{ color: "red" }}>
        {handleCourseModuleErrors() != null && handleCourseModuleErrors()}
      </p>

      <TextField
        required
        id="outlined-password-input"
        label="Senha"
        type="password"
        autoComplete="current-password"
        variant="outlined"
        name="senha"
        onChange={handlePassword}
      />
      <p style={{ color: "red" }}>
        {handlePasswordErrors() != null && handlePasswordErrors()}
      </p>

      <TextField
        required
        id="outlined-password-input"
        label="Confirmar Senha"
        type="password"
        autoComplete="current-password"
        variant="outlined"
        name="confirmarSenha"
        onChange={handleConfirmPassword}
      />
      <p style={{ color: "red" }}>
        {handleConfirmarSenhaErrors() != null && handleConfirmarSenhaErrors()}
      </p>
      <Button
        onClick={handleSubmit}
        className="LoginButton"
        variant="contained"
        color="primary"
      >
        Cadastrar
      </Button>
    </form>
  );
};

export default Register;
