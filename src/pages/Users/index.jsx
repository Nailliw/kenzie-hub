import SearchBar from "../../components/SearchBar";
import UserList from "../../components/UserList";

const Users = () => {
	return (
		<div className="usersContainer">
			<div>
				<h1>Usuários</h1>
				<SearchBar />
			</div>
			<UserList />
		</div>
	);
};

export default Users;
