import { useDispatch } from "react-redux";
import { getUsersThunk } from "../../store/modules/usersData/thunk";

import "./styles.css";
import SearchBar from "../../components/SearchBar";
import FilterBar from "../../components/FilterBar";
import UserList from "../../components/UserList";
import NavBar from "../../components/NavBar";

const Users = () => {
  const dispatch = useDispatch();

  dispatch(getUsersThunk());

  return (
    <div className="usersContainer">
      <h1>Usuários</h1>
      <SearchBar />
      <div className="usersList">
        <FilterBar />
        <UserList />
      </div>
      <NavBar />
    </div>
  );
};

export default Users;
