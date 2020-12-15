import { updateUsersList } from "./actions";
import { api } from "../../../services/api";

export const getUsersThunk = () => {
  return (dispatch, getState) => {
    const usersFilters = getState().UsersFiltersReducer;
    const { perPage, page, tech } = usersFilters;

    window.localStorage.setItem("usersFilters", JSON.stringify(usersFilters));

    api
      .get(`/users?perPage=${perPage}&page=${page}&tech=${tech}`)
      .then((res) => {
        console.log(res);

        const newState = res.data;

        window.localStorage.setItem("usersList", JSON.stringify(newState));

        console.log(newState);

        dispatch(updateUsersList(newState));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
