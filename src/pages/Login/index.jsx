import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUserThunk } from "../../store/modules/loggedUser/thunk";
import { IsLogged } from "../../components/IsLogged";
import { useEffect } from "react";
import { Box, Button, TextField } from "@material-ui/core/";
import useStyles from "./makeStyles";

const Login = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.LoggedUserReducer);
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().email().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });

  const { register, handleSubmit, errors, setError } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    dispatch(loginUserThunk(data, setError));
  };

  useEffect(() => {
    if (IsLogged(dispatch)) {
      history.push(`/users/profile`);
    }
  }, [userId]);

  const classes = useStyles();

  return (
    <Box className={classes.main}>
      <form
        onSubmit={handleSubmit(handleForm)}
        className={classes.formRegister}
      >
        <Box className={classes.formInfo}>
          <Box className={classes.logo} />
        </Box>
        <Box className={classes.inputArea}>
          <Box className={classes.inputField}>
            <TextField
              className={classes.input}
              variant="outlined"
              label="Email"
              name="email"
              margin="dense"
              type="string"
              inputRef={register}
              error={!!errors.email}
              helperText={errors.email?.message}
            ></TextField>
          </Box>
          <Box className={classes.inputField}>
            <TextField
              className={classes.input}
              variant="outlined"
              label="Senha"
              name="password"
              margin="dense"
              inputRef={register}
              type="password"
              error={!!errors.password}
              helperText={errors.password?.message}
              margin="dense"
            ></TextField>
          </Box>
        </Box>
        <Box className={classes.formBottom}>
          <Button
            type="submit"
            variant="outlined"
            className={classes.loginButton}
          >
            Logar
          </Button>
          <div className={classes.feedbackMessage}>
            <h2 style={{ color: "red", textAlign: "center" }}>
              {errors.userLogin?.message}
            </h2>
          </div>
        </Box>
      </form>
    </Box>
  );
};

export default Login;
