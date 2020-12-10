import { UPDATE_USERSDATA } from "./actionsType";
const initialState = {
  selectedUser: {},
  loggedUser: {
    token: "",
    user: {},
  },
  usersFilters: {
    perPage: 500,
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
