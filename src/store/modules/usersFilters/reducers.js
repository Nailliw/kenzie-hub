import { UPDATE_USERSFILTERS } from "./actionsType";
const initialState = {
  perPage: 15,
  page: 1,
  tech: "",
};

const UsersFiltersReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USERSFILTERS:
      const { newState } = action;
      return newState;
    default:
      return state;
  }
};

export default UsersFiltersReducer;
