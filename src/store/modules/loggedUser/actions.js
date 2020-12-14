import { UPDATE_LOGGEDUSER } from "./actionsType";

export const updateLoggedUser = (newState) => ({
  type: UPDATE_LOGGEDUSER,
  newState: newState,
});
