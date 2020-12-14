import { updateSelectedUser } from "./actions";
import { api } from "../../../services/api";

export const selectUserThunk = (userId) => {
  return (dispatch, getState) => {
    api
      .get(`/users/${userId}`)
      .then((res) => {
        console.log(res);

        const newState = res.data;

        console.log(newState);

        window.localStorage.setItem("selectedUser", JSON.stringify(newState));

        dispatch(updateSelectedUser(newState));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
