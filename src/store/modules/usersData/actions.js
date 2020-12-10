import { UPDATE_USERSDATA } from "./actionsType";

export const updateUserData = (newState) => ({
  type: UPDATE_USERSDATA,
  newState: newState,
});
