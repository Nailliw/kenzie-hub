import { UPDATE_USERSFILTERS } from "./actionsType";

export const updateUsersFilters = (newState) => ({
  type: UPDATE_USERSFILTERS,
  newState: newState,
});
