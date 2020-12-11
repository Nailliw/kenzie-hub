import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUserThunk } from "../../store/modules/usersData/thunk";
import { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const Login = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.UsersDataReducer);
  const history = useHistory();
  const [invalid, setInvalid] = useState("");

  const schema = yup.object().shape({
    email: yup.string().email().required("Campo obrigatorio"),
    password: yup.string().required("Campo obrigatorio"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    dispatch(loginUserThunk(data, setInvalid));
  };

  useEffect(() => {
    if (userId.loggedUser?.user.id) {
      history.push(`/users/profile`);
    } else {
    }
  }, [userId]);

  return (
    <>
      <form onSubmit={handleSubmit(handleForm)}>
        <h1>Login</h1>
        <TextField
          id="filled-basic"
          variant="filled"
          label="Email"
          name="email"
          margin="normal"
          type="string"
          inputRef={register}
          error={!!errors.email}
          helperText={errors.email?.message}
        ></TextField>

        <TextField
          id="filled-basic"
          variant="filled"
          label="Password"
          name="password"
          inputRef={register}
          type="password"
          error={!!errors.password}
          helperText={errors.password?.message}
          margin="normal"
        ></TextField>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="small"
          margin="normal"
        >
          Logar
        </Button>
        <p style={{ color: "red" }}>{invalid}</p>
      </form>
    </>
  );
};

export default Login;
