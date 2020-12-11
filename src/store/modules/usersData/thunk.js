import { updateUserData } from "./actions";
import { api } from "../../../services/api";

export const registerUserDataThunk = (userData) => {
  console.log(userData);
  return (dispatch) => {
    api
      .post(`/users`, { ...userData })
      .then((res) => {
        console.log(res);
        console.log("registrado");
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const getUsersThunk = () => {
  return (dispatch, getState) => {
    const { UsersDataReducer } = getState();
    const { usersFilters } = UsersDataReducer;
    const { perPage, page, tech } = usersFilters;

    window.localStorage.setItem("usersFilters", JSON.stringify(usersFilters));

    api
      .get(`/users?perPage=${perPage}&page=${page}&tech=${tech}`)
      .then((res) => {
        console.log(res);

        const newState = {
          ...UsersDataReducer,
          usersList: res.data,
        };

        const { usersList } = newState;

        window.localStorage.setItem("usersList", JSON.stringify(usersList));

        console.log(newState);

        dispatch(updateUserData(newState));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const setUsersFiltersThunk = (newUsersFilters) => {
  return (dispatch, getState) => {
    const { UsersDataReducer } = getState();

    const newState = {
      ...UsersDataReducer,
      usersFilters: newUsersFilters,
    };

    dispatch(updateUserData(newState));
    dispatch(getUsersThunk());
  };
};

export const selectUserThunk = (userId) => {
  return (dispatch, getState) => {
    const { UsersDataReducer } = getState();

    api
      .get(`/users/${userId}`)
      .then((res) => {
        console.log(res);

        const newState = {
          ...UsersDataReducer,
          selectedUser: res.data,
        };

        console.log(newState);

        const { selectedUser } = newState;

        window.localStorage.setItem(
          "selectedUser",
          JSON.stringify(selectedUser)
        );

        dispatch(updateUserData(newState));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const loginUserThunk = (userLoginData, setInvalid) => {
  return (dispatch, getState) => {
    const { UsersDataReducer } = getState();
    api
      .post(`/sessions`, userLoginData)
      .then((res) => {
        setInvalid("");
        const newState = {
          ...UsersDataReducer,
          loggedUser: {
            ...res.data,
            headersToken: {
              headers: { Authorization: `Bearer ${res.data.token}` },
            },
          },
        };

        const { loggedUser } = newState;
        window.localStorage.setItem("loggedUser", JSON.stringify(loggedUser));

        dispatch(updateUserData(newState));
      })
      .catch((error) => setInvalid(error.response.data.message));
  };
};

export const updateLoggedUserThunk = () => {
  return (dispatch, getState) => {
    const { UsersDataReducer } = getState();

    let loggedUser = JSON.parse(window.localStorage.getItem("loggedUser"));

    const { id } = loggedUser.user;

    api
      .get(`/users/${id}`)
      .then((res) => {
        console.log(res);

        const newState = {
          ...UsersDataReducer,
          loggedUser: res.data,
        };

        console.log(newState);

        const { loggedUser } = newState;

        window.localStorage.setItem("loggedUser", JSON.stringify(loggedUser));

        dispatch(updateUserData(newState));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const addUserTechThunk = (userTech) => {
  return (dispatch, getState) => {
    let loggedUser = JSON.parse(window.localStorage.getItem("loggedUser"));

    let validation = loggedUser.headersToken;

    api
      .post(`/users/techs`, userTech, validation)
      .then((res) => {
        dispatch(updateLoggedUserThunk());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const addUserWorkThunk = (userWork) => {
  return (dispatch, getState) => {
    let loggedUser = JSON.parse(window.localStorage.getItem("loggedUser"));

    let validation = loggedUser.headersToken;

    api
      .post(`/users/works`, userWork, validation)
      .then((res) => {
        dispatch(updateLoggedUserThunk());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const changeProfileThunk = (updatedProfile) => {
  return (dispatch, getState) => {
    let loggedUser = JSON.parse(window.localStorage.getItem("loggedUser"));

    let validation = loggedUser.headersToken;

    api
      .put(`/profile`, updatedProfile, validation)
      .then((res) => {
        dispatch(updateLoggedUserThunk());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const changeTechStatusThunk = (techStatus, idTech) => {
  return (dispatch, getState) => {
    let loggedUser = JSON.parse(window.localStorage.getItem("loggedUser"));

    let validation = loggedUser.headersToken;

    api
      .put(`/users/techs/${idTech}`, techStatus, validation)
      .then((res) => {
        dispatch(updateLoggedUserThunk());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const changeWorkInfoThunk = (workInfo, idWork) => {
  return (dispatch, getState) => {
    let loggedUser = JSON.parse(window.localStorage.getItem("loggedUser"));

    let validation = loggedUser.headersToken;

    api
      .put(`/users/works/${idWork}`, workInfo, validation)
      .then((res) => {
        dispatch(updateLoggedUserThunk());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const deleteTechThunk = (idTech) => {
  return (dispatch, getState) => {
    let loggedUser = JSON.parse(window.localStorage.getItem("loggedUser"));

    let validation = loggedUser.headersToken;

    api
      .delete(`/users/techs/${idTech}`, validation)
      .then((res) => {
        dispatch(updateLoggedUserThunk());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const deleteWorkThunk = (idWork) => {
  return (dispatch, getState) => {
    let loggedUser = JSON.parse(window.localStorage.getItem("loggedUser"));

    let validation = loggedUser.headersToken;

    api
      .delete(`/users/works/${idWork}`, validation)
      .then((res) => {
        dispatch(updateLoggedUserThunk());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
