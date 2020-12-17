import { updateLoggedUserThunk } from "../../store/modules/loggedUser/thunk";

export const IsLogged = (dispatch) => {
	dispatch(updateLoggedUserThunk());
	let loggedUser = JSON.parse(window.localStorage.getItem("loggedUser"));
	if (loggedUser) {
		if (loggedUser.token) {
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}
};
