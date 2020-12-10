import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUserThunk } from "../../store/modules/usersData/thunk";

const Login = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.UsersDataReducer);
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().email().required("Campo obrigatorio"),
    password: yup.string().required("Campo obrigatorio"),
  });

  const { register, handleSubmit, errors, setError } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    dispatch(loginUserThunk(data));
    console.log(userId.loggedUser?.user.id);
    history.push(`/users/${userId.loggedUser?.user.id}`);
  };

  return (
    <>
      <div>Login</div>
      <form onSubmit={handleSubmit(handleForm)}>
        <input placeholder="Insert Email" name="email" ref={register}></input>

        <input
          placeholder="Insert Password"
          name="password"
          type="password"
          ref={register}
        ></input>

        <button type="submit">Logar</button>
      </form>
    </>
  );
};

export default Login;
