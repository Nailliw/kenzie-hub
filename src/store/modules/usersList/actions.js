import { UPDATE_USERSLIST } from "./actionsType";

export const updateUsersList = (newState) => ({
  type: UPDATE_USERSLIST,
  newState: newState,
});
