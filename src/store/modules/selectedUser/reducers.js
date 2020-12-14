import { UPDATE_SELECTEDUSER } from "./actionsType";
const initialState = {};

const SelectedUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SELECTEDUSER:
      const { newState } = action;
      return newState;
    default:
      return state;
  }
};

export default SelectedUserReducer;
