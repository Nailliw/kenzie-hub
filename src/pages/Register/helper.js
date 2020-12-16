import { api } from "../../services/api";

export const RegisterHelper = (
	userData,
	setError,
	setRegisterSuccess,
	history
) => {
	return api
		.post(`/users`, { ...userData })
		.then((res) => {
			setRegisterSuccess(true);
			setError("registerError", {
				message: "Cadastro realizado com Sucesso!",
			});
			setTimeout(() => {
				history.push("/login");
			}, 3000);
		})
		.catch((error) => {
			setRegisterSuccess(false);
			setError("registerError", {
				message: "Email já Cadastrado",
			});
		});
};
