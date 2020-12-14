import { updateUserData } from "./actions";

export const addUserData = (userData) => {
  return (dispatch, getState) => {
    const { UsersDataReducer } = getState();
    const { usersList } = UsersDataReducer;

    console.log(UsersDataReducer);

    const newState = {
      ...UsersDataReducer,
      usersList: [...usersList, userData],
    };

    console.log(newState);

    window.localStorage.setItem(
      "usersList",
      JSON.stringify(newState.usersList)
    );

    dispatch(updateUserData(newState));
  };
};
