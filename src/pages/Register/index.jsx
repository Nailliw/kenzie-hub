import {
  Box,
  Typography,
  InputLabel,
  FormControl,
  FormHelperText,
  TextField,
  Select,
  Button,
} from "@material-ui/core/";

import { useState } from "react";
import { useHistory } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import useStyles from "./styles/makeStyles";
import { RegisterHelper } from "./helper";

const Register = () => {
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup
      .string()
      .min(3, "Nome deve conter no mínimo 3 letras")
      .required("Campo obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    bio: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
    course_module: yup.string().required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Senha deve conter no mínimo 6 dígitos")
      .required("Campo obrigatório"),
    password_confirmation: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas não conferem"),
  });

  const { register, handleSubmit, errors, setError } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    console.log(data);
    RegisterHelper(data, setError, setRegisterSuccess, history);
  };

  const classes = useStyles();

  return (
    <Box className={classes.main}>
      <form
        onSubmit={handleSubmit(handleForm)}
        className={classes.formRegister}
      >
        <Box className={classes.formInfo}>
          <Box className={classes.logo} />

          <Typography
            component="h3"
            variant="h3"
            className={classes.labelCadastro}
          >
            Cadastro de Usuário
          </Typography>
        </Box>
        <Box className={classes.inputArea}>
          <Box className={classes.inputField}>
            <TextField
              className={classes.input}
              variant="outlined"
              label="Nome"
              name="name"
              margin="dense"
              type="string"
              inputRef={register}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          </Box>
          <Box className={classes.inputField}>
            <TextField
              className={classes.input}
              variant="outlined"
              label="Email"
              name="email"
              margin="dense"
              type="email"
              inputRef={register}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          </Box>
          <Box className={classes.inputField}>
            <TextField
              className={classes.input}
              multiline
              rowsMax={4}
              variant="outlined"
              label="
        Biografia"
              name="bio"
              margin="dense"
              type="string"
              inputRef={register}
              error={!!errors.bio}
              helperText={errors.bio?.message}
            />
          </Box>
          <Box className={classes.inputField}>
            <TextField
              className={classes.input}
              variant="outlined"
              label="Contato"
              name="contact"
              margin="dense"
              type="string"
              inputRef={register}
              error={!!errors.contact}
              helperText={errors.contact?.message}
            />
          </Box>
          <Box className={classes.inputField}>
            <TextField
              className={classes.input}
              variant="outlined"
              label="Senha"
              name="password"
              margin="dense"
              type="password"
              inputRef={register}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          </Box>
          <Box className={classes.inputField}>
            <TextField
              className={classes.input}
              variant="outlined"
              label="Repita a senha"
              name="password_confirmation"
              margin="dense"
              type="password"
              inputRef={register}
              error={!!errors.password}
              helperText={errors.password_confirmation?.message}
            />
          </Box>
          <Box className={classes.inputField}>
            <FormControl className={classes.select}>
              <InputLabel
                variant="outlined"
                margin="dense"
                size="small"
                error={!!errors.course_module}
                id="select-module"
              >
                Módulo do curso
              </InputLabel>

              <Select
                error={!!errors.course_module}
                native={true}
                name="course_module"
                inputRef={register}
                labelId="select-module"
                label="Módulo do curso"
                margin="dense"
                size="small"
                variant="outlined"
              >
                <option value=""></option>
                <option value="primeira módulo (introdução ao FrontEnd)">
                  Primeiro módulo (Introdução ao FrontEnd)
                </option>
                <option value="Segundo módulo (FrontEnd Avançado)">
                  Segundo módulo (FrontEnd Avançado)
                </option>
                <option value="Terceiro módulo (introdução ao BackEnd)">
                  Terceiro módulo (Introdução ao BackEnd)
                </option>
                <option value="Quarto módulo (BackEnd Avançado)">
                  Quarto módulo (BackEnd Avançado)
                </option>
              </Select>
              <FormHelperText style={{ color: "red" }}>
                {errors.course_module?.message}
              </FormHelperText>
            </FormControl>
          </Box>
        </Box>
        <Box className={classes.formBottom}>
          <Button
            type="submit"
            className={classes.loginButton}
            variant="outlined"
          >
            Cadastrar
          </Button>
          <div className={classes.feedbackMessage}>
            {registerSuccess ? (
              <h2 style={{ color: "rgb(8,53,108)", textAlign: "center" }}>
                Registro Concluído
              </h2>
            ) : (
              <h2 style={{ color: "red", textAlign: "center" }}>
                {errors.registerError?.message}
              </h2>
            )}
          </div>
        </Box>
      </form>
    </Box>
  );
};

export default Register;
