import React, { useState, useEffect } from "react";
import {
  registerUserDataThunk,
  loginUserThunk,
  getUsersThunk,
  setUsersFiltersThunk,
  selectUserThunk,
  addUserTechThunk,
  addUserWorkThunk,
  changeProfileThunk,
  changeTechStatusThunk,
  changeWorkInfoThunk,
  deleteTechThunk,
  deleteWorkThunk,
} from "../store/modules/usersData/thunk";
import { useSelector, useDispatch } from "react-redux";

const TesteAPI = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const userLogin = {
      email: "felipeteste3@gmail.com",
      password: "!A12345",
    };
    dispatch(loginUserThunk(userLogin));
  }, []);

  const handleButton = () => {
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

    const idWork = "ecb864cc-dc30-4207-abb0-18cc36d1158a";

    const userTech = {
      title: "C++",
      status: "Intermediário",
    };

    const changeTechStatus = {
      status: "Avançado",
    };

    const idTech = "1685e888-f3c5-4327-be02-468df410b36c";

    //dispatch(getUsersThunk());
    dispatch(setUsersFiltersThunk(usersFilters));

    //dispatch(addUserTechThunk(userTech));
    //dispatch(addUserWorkThunk(userWork));

    //dispatch(changeProfileThunk(changeProfile));
    //dispatch(changeTechStatusThunk(changeTechStatus, idTech));
    //dispatch(changeWorkInfoThunk(changedWork, idWork));

    //dispatch(deleteTechThunk(idTech));
    //dispatch(deleteWorkThunk(idWork));
  };
  return <button onClick={handleButton}>Testar</button>;
};

export default TesteAPI;
