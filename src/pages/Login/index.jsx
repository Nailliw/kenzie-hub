import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { loginUserThunk } from "../../store/modules/loggedUser/thunk";
import { IsLogged } from "../../components/IsLogged";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Box, Button, TextField } from "@material-ui/core/";
import useStyles from "./styles/makeStyles";

const Login = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const userId = useSelector((state) => state.LoggedUserReducer);

	const schema = yup.object().shape({
		email: yup.string().email().required("Campo obrigatório"),
		password: yup.string().required("Campo obrigatório"),
	});

	const { register, handleSubmit, errors, setError } = useForm({
		resolver: yupResolver(schema),
	});

	useEffect(() => {
		if (IsLogged(dispatch)) {
			history.push(`/users/profile`);
		}
	}, [userId]);

	const handleForm = (data) => {
		dispatch(loginUserThunk(data, setError));
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
						/>
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
						/>
					</Box>
				</Box>
				<Box className={classes.formBottom}>
					<Button
						type="submit"
						variant="outlined"
						className={classes.loginButton}
					>
						Entrar
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
