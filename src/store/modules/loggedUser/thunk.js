import { updateLoggedUser } from "./actions";
import { api } from "../../../services/api";

export const registerUserThunk = (userData) => {
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

export const loginUserThunk = (userLoginData) => {
  return (dispatch, getState) => {
    const { LoggedUserReducer } = getState();
    console.log(LoggedUserReducer);

    api
      .post(`/sessions`, userLoginData)
      .then((res) => {
        console.log(res);

        const newState = {
          ...res.data,
          headersToken: {
            headers: { Authorization: `Bearer ${res.data.token}` },
          },
        };

        console.log(newState);

        window.localStorage.setItem("loggedUser", JSON.stringify(newState));

        dispatch(updateLoggedUser(newState));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const logoutUserThunk = () => {
  return (dispatch, getState) => {
    const newState = {};

    window.localStorage.setItem("loggedUser", JSON.stringify(newState));

    dispatch(updateLoggedUser(newState));
  };
};

export const updateLoggedUserThunk = () => {
  return (dispatch, getState) => {
    let loggedUser = JSON.parse(window.localStorage.getItem("loggedUser"));

    if (loggedUser) {
      const { id } = loggedUser.user;
      console.log(loggedUser);
      api
        .get(`/users/${id}`)
        .then((res) => {
          console.log(res);

          const newState = { ...loggedUser, res };

          console.log(newState);

          window.localStorage.setItem("loggedUser", JSON.stringify(newState));

          dispatch(updateLoggedUser(newState));
        })
        .catch((error) => {
          console.log(error);
        });
    }
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

export const deleteLoggedUser = (idUser) => {
  return (dispatch, getState) => {
    let loggedUser = JSON.parse(window.localStorage.getItem("loggedUser"));

    let validation = loggedUser.headersToken;

    api
      .delete(`/users/${idUser}`, validation)
      .then((res) => {
        dispatch(updateLoggedUserThunk());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const uploadUserAvatarThunk = (avatarData) => {
  return (dispatch, getState) => {
    let loggedUser = JSON.parse(window.localStorage.getItem("loggedUser"));

    let validation = loggedUser.headersToken;

    api
      .patch(`/users/avatar`, avatarData, validation)
      .then((res) => {
        dispatch(updateLoggedUserThunk());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
