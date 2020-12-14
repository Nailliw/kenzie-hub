import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUserThunk } from "../../store/modules/usersData/thunk";
import { useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const Login = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.UsersDataReducer);
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().email().required("Required field"),
    password: yup.string().required("Required field"),
  });

  const { register, handleSubmit, errors, setError } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    dispatch(loginUserThunk(data, setError));
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
          variant="outlined"
          label="Email"
          name="email"
          margin="dense"
          size="small"
          type="string"
          inputRef={register}
          error={!!errors.email}
          helperText={errors.email?.message}
        ></TextField>

        <TextField
          variant="outlined"
          label="Password"
          name="password"
          inputRef={register}
          type="password"
          error={!!errors.password}
          helperText={errors.password?.message}
          margin="dense"
          size="small"
        ></TextField>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          margin="normal"
        >
          Logar
        </Button>

        <p style={{ color: "red" }}>{errors.userLogin?.message}</p>
      </form>
    </>
  );
};

export default Login;
