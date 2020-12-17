import { UPDATE_LOGGEDUSER } from "./actionsType";
const initialState = { headerToken: "", token: "", user: {} };

const LoggedUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LOGGEDUSER:
      const { newState } = action;
      return newState;
    default:
      return state;
  }
};

export default LoggedUserReducer;
