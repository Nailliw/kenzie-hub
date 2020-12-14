import { updateUsersFilters } from "./actions";
import { getUsersThunk } from "../usersList/thunk";
import { api } from "../../../services/api";

export const setUsersFiltersThunk = (newUsersFilters) => {
  return (dispatch, getState) => {
    const newState = newUsersFilters;

    dispatch(updateUsersFilters(newState));
    dispatch(getUsersThunk());
  };
};
