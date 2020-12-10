import { updateUserData } from "./actions";
import { api } from "../../../services/api";
import axios from "axios";

export const registerUserDataThunk = (userData) => {
	return (dispatch) => {
		api
			.post(`/users`, userData)
			.then((res) => {
				console.log(res);
			})
			.catch((error) => {
				console.log(error);
			});
	};
};

export const getUsersThunk = () => {
	return (dispatch, getState) => {
		const { UsersDataReducer } = getState();
		const { usersFilters } = UsersDataReducer;
		const { perPage } = usersFilters;
		const { page } = usersFilters;
		const { tech } = usersFilters;

		window.localStorage.setItem("usersFilters", JSON.stringify(usersFilters));

		api
			.get(`/users?perPage=${perPage}&page=${page}&tech=${tech}`)
			.then((res) => {
				console.log(res);

				const newState = {
					...UsersDataReducer,
					usersList: res.data,
				};

				const { usersList } = newState;

				window.localStorage.setItem("usersList", JSON.stringify(usersList));

				console.log(newState);

				dispatch(updateUserData(newState));
			})
			.catch((error) => {
				console.log(error);
			});
	};
};

export const setUsersFiltersThunk = (newUsersFilters) => {
	return (dispatch, getState) => {
		const { UsersDataReducer } = getState();

		const newState = {
			...UsersDataReducer,
			usersFilters: newUsersFilters,
		};

		dispatch(updateUserData(newState));
		dispatch(getUsersThunk());
	};
};

export const selectUserThunk = (userId) => {
	return (dispatch, getState) => {
		const { UsersDataReducer } = getState();

		api
			.get(`/users/${userId}`)
			.then((res) => {
				console.log(res);

				const newState = {
					...UsersDataReducer,
					selectedUser: res.data,
				};

				console.log(newState);

				const { selectedUser } = newState;

				window.localStorage.setItem(
					"selectedUser",
					JSON.stringify(selectedUser)
				);

				dispatch(updateUserData(newState));
			})
			.catch((error) => {
				console.log(error);
			});
	};
};

export const loginUserThunk = (userLoginData) => {
	return (dispatch, getState) => {
		const { UsersDataReducer } = getState();
		console.log(UsersDataReducer);

		api
			.post(`/sessions`, userLoginData)
			.then((res) => {
				console.log(res);
				const newState = {
					...UsersDataReducer,
					loggedUser: {
						...res.data,
						headersToken: {
							headers: { Authorization: "Bearer " + res.data.token },
						},
					},
				};

				console.log(newState);

				const { loggedUser } = newState;
				window.localStorage.setItem("loggedUser", JSON.stringify(loggedUser));

				dispatch(updateUserData(newState));
			})
			.catch((error) => {
				console.log(error);
			});
	};
};

export const addUserTechThunk = (userTech) => {
	return (dispatch, getState) => {
		const { UsersDataReducer } = getState();

		console.log(UsersDataReducer);

		let loggedUser = JSON.parse(window.localStorage.getItem("loggedUser"));

		let validation = loggedUser.headersToken;

		console.log(validation);
		api
			.post(`/users/techs`, userTech, validation)
			.then((res) => {
				console.log(res);
			})
			.catch((error) => {
				console.log(error);
			});
	};
};
