import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  loginUserThunk,
  addUserTechThunk,
  addUserWorkThunk,
  changeProfileThunk,
  changeTechStatusThunk,
  changeWorkInfoThunk,
  deleteTechThunk,
  deleteWorkThunk,
  registerUserThunk,
  deleteLoggedUser,
  uploadUserAvatar,
} from "../store/modules/loggedUser/thunk";
import { selectUserThunk } from "../store/modules/selectedUser/thunk";
import { setUsersFiltersThunk } from "../store/modules/usersFilters/thunk";
import { getUsersThunk } from "../store/modules/usersList/thunk";

const TesteAPI = () => {
  const [data, setData] = useState(null);
  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.LoggedUserReducer);

  useEffect(() => {
    const userLogin = {
      email: "felipesmTeste@email.com",
      password: "123456",
    };
    dispatch(loginUserThunk(userLogin));
  }, []);

  const handleAvatarChange = (e) => {
    const newData = new FormData();
    newData.append("avatar", e.target.files[0]);
    setData(newData);
  };

  const handleButton = () => {
    const registerUser = {
      email: "felipesmTeste@email.com",
      password: "123456",
      name: "Felipe S. Molina",
      bio: "Lorem ipsum dolor emet",
      contact: "linkedin/in/johndoe",
      course_module: "Segundo Módulo (Frontend avançado)",
    };

    const usersFilters = {
      perPage: 500,
      page: 1,
      tech: "",
    };

    const changeProfile = {
      name: "Felipe Zika",
      contact: "linkedin/felipe",
      old_password: "123456",
      password: "123456",
    };

    const userWork = {
      title: "KenzieHub",
      description:
        "I was the backend developer of this project, and i did it using Typescript and NodeJS",
      deploy_url: "https://kenziehub.me",
    };

    const changedWork = {
      title: "KenzieHub Atualizado",
      description: "Nova descrição.",
    };

    const idWork = "5302250e-9149-46c3-bfa1-1e693716173b";

    const userTech = {
      title: "C++",
      status: "Intermediário",
    };

    const changeTechStatus = {
      status: "Avançado",
    };

    const idTech = "d9509a34-ba13-41f6-8326-d97699fe98c8";

    const idUser = JSON.parse(window.localStorage.getItem("loggedUser")).user
      .id;

    //dispatch(getUsersThunk());
    //dispatch(setUsersFiltersThunk(usersFilters));

    //dispatch(registerUserThunk(registerUser));
    dispatch(uploadUserAvatar(data));

    //dispatch(addUserTechThunk(userTech));
    //dispatch(addUserWorkThunk(userWork));

    //dispatch(changeProfileThunk(changeProfile));
    //dispatch(changeTechStatusThunk(changeTechStatus, idTech));
    //dispatch(changeWorkInfoThunk(changedWork, idWork));

    //dispatch(deleteTechThunk(idTech));
    //dispatch(deleteWorkThunk(idWork));
    //dispatch(deleteLoggedUser(idUser));
    console.log(loggedUser);
  };
  return (
    <>
      <button onClick={handleButton}>Testar</button>
      <form>
        <input type="file" id="avatar" onChange={handleAvatarChange} />
      </form>
    </>
  );
};

export default TesteAPI;
