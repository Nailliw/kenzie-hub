import { UPDATE_SELECTEDUSER } from "./actionsType";

export const updateSelectedUser = (newState) => ({
  type: UPDATE_SELECTEDUSER,
  newState: newState,
});
