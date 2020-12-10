import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services/api/index";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const schema = yup.object().shape({
    email: yup.string().email().required("Campo obrigatorio"),
    password: yup.string().required("Campo obrigatorio"),
  });

  const { register, handleSubmit, watch, errors, setError } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    api
      .post("/sessions", { ...data })
      .then((res) => {
        console.log(res);
        window.localStorage.setItem("authToken", res.data.token);
        history.push(`/users/${res.data.user.id}`);
      })
      .catch((err) => console.log(err.response.data.message));
  };

  return (
    <>
      <div>Login</div>
      <form onSubmit={handleSubmit(handleForm)}>
        <input placeholder="Insert Email" name="email" ref={register}></input>
        <p style={{ color: "red" }}>{errors.email?.message}</p>
        <input
          placeholder="Insert Password"
          name="password"
          type="password"
          ref={register}
        ></input>
        <p style={{ color: "red" }}>{errors.password?.message}</p>
        <button type="submit">Logar</button>
      </form>
    </>
  );
};

export default Login;
