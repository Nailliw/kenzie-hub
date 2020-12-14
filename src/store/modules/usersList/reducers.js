import { UPDATE_USERSLIST } from "./actionsType";
const initialState = [];

const UsersListReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USERSLIST:
      const { newState } = action;
      return newState;
    default:
      return state;
  }
};

export default UsersListReducer;
