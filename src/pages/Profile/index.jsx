import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { IsLogged } from "../../components/IsLogged";
import { updateLoggedUserThunk } from "../../store/modules/loggedUser/thunk";
import { selectUserThunk } from "../../store/modules/selectedUser/thunk";
import IsValidState from "../../components/IsValidState";
import ProfileCard from "../../components/ProfileCard";

const Profile = () => {
  const loggedUser = useSelector((state) => state.LoggedUserReducer);
  const selectedUser = useSelector((state) => state.SelectedUserReducer);
  const dispatch = useDispatch();
  const history = useHistory();
  const { userID } = useParams();

  useEffect(() => {
    if (!IsLogged(dispatch)) {
      history.push("/login");
    }
  }, []);

  useEffect(() => {
    if (!IsLogged(dispatch)) {
      history.push("/login");
    }
  }, [loggedUser.token]);

  useEffect(() => {
    if (!IsLogged(dispatch)) {
      history.push("/login");
    }

    console.log(userID);
    console.log(selectedUser);
    console.log(loggedUser);
    if (userID !== "profile") {
      dispatch(selectUserThunk(userID));
    }
  }, [userID]);

  return (
    <>
      {console.log(loggedUser.user)}
      {userID !== "profile"
        ? IsValidState(selectedUser) && (
            <ProfileCard data={selectedUser} selectedUser={true} />
          )
        : IsValidState(loggedUser.user) && (
            <ProfileCard data={loggedUser.user} selectedUser={false} />
          )}
    </>
  );
};

export default Profile;
