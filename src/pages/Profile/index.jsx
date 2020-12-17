import { useState, useEffect } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
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
	const location = useLocation();
	const { userID } = useParams();

	useEffect(() => {
		if (!IsLogged(dispatch) && location.pathname === "/users/profile") {
			history.push("/users");
		}
	}, []);

	console.log(userID);
	console.log(selectedUser);
	console.log(loggedUser);

	useEffect(() => {
		if (userID !== "profile") {
			dispatch(selectUserThunk(userID));
		}
	}, []);

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
