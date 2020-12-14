import { createStore, combineReducers, applyMiddleware } from "redux";
import UsersDataReducer from "./modules/usersData/reducers";
import SelectedUserReducer from "./modules/selectedUser/reducers";
import LoggedUserReducer from "./modules/loggedUser/reducers";
import UsersListReducer from "./modules/usersList/reducers";
import UsersFiltersReducer from "./modules/usersFilters/reducers";
import thunk from "redux-thunk";

const reducers = combineReducers({
  UsersDataReducer,
  LoggedUserReducer,
  SelectedUserReducer,
  UsersFiltersReducer,
  UsersListReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
