import { UPDATE_USERSDATA } from "./actionsTypes";

export const updateUserData = (newState) => ({
  type: UPDATE_USERSDATA,
  newState: newState,
});
