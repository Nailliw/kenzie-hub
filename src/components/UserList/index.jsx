import axios from "axios";
import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { addUserData } from "../../store/modules/usersData/thunk";

import UserCard from "../UserCard";

const UserList = () => {
	const dispatch = useDispatch();

	const usersData = useSelector(
		({ UsersDataReducer: { usersList } }) => usersList
	);
	console.log(usersData);

	useEffect(() => {
		axios
			.get("https://kenziehub.me/users")
			.then((res) => dispatch(addUserData(res.data)))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div>
			{usersData.map((user, index) => {
				return <UserCard key={index} user={user} />;
			})}
		</div>
	);
};

export default UserList;
