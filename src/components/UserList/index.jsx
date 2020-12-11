import { useSelector } from "react-redux";

import "./styles.css";
import UserCard from "../UserCard";

const UserList = () => {
	const usersList = useSelector(
		({ UsersDataReducer: { usersList } }) => usersList
	);

	return (
		<div className="list">
			{usersList.map((user, index) => {
				return <UserCard key={index} user={user} />;
			})}
		</div>
	);
};

export default UserList;
