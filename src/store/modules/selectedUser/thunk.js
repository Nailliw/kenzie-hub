import { updateSelectedUser } from "./actions";
import { api } from "../../../services/api";

export const selectUserThunk = (userId) => {
	return (dispatch, getState) => {
		dispatch(clearSelectUserThunk());

		api
			.get(`/users/${userId}`)
			.then((res) => {
				const newState = res.data;

				window.localStorage.setItem("selectedUser", JSON.stringify(newState));

				dispatch(updateSelectedUser(newState));
			})
			.catch((error) => {
				console.log(error);
			});
	};
};

export const clearSelectUserThunk = () => {
	return (dispatch, getState) => {
		window.localStorage.removeItem("selectedUser");
		dispatch(updateSelectedUser({}));
	};
};
