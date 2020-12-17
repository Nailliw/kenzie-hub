import { useEffect } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { selectUserThunk } from "../../store/modules/selectedUser/thunk";

import { IsLogged } from "../../components/IsLogged";
import IsValidState from "../../components/IsValidState";

import ProfileCard from "../../components/Profile/ProfileCard";
import { updateLoggedUserThunk } from "../../store/modules/loggedUser/thunk";

const Profile = () => {
  const loggedUser = useSelector((state) => state.LoggedUserReducer);
  const selectedUser = useSelector((state) => state.SelectedUserReducer);

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const { userID } = useParams();

  useEffect(() => {
    dispatch(updateLoggedUserThunk());
  }, []);

  useEffect(() => {
    if (
      !IsLogged(dispatch) &&
      (location.pathname === "/users/profile" ||
        location.pathname === "/users/edit")
    ) {
      history.push("/users");
    }
  }, [loggedUser.token]);

  useEffect(() => {
    if (userID !== "profile") {
      dispatch(selectUserThunk(userID));
    }
  }, [userID]);

  return (
    <>
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
