import { UPDATE_USERSDATA } from "./actionsTypes";
const initialState = {
	selectedUser: {},
	loggedUser: {
		headerToken: "",
		token: "",
		user: {},
	},
	usersFilters: {
		perPage: 15,
		page: 1,
		tech: "",
	},
	usersList: [],
};

const UsersDataReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_USERSDATA:
			const { newState } = action;
			return newState;
		default:
			return state;
	}
};

export default UsersDataReducer;
