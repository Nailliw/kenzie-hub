import { createStore, combineReducers, applyMiddleware } from "redux";
import UsersDataReducer from "./modules/usersData/reducers";
import thunk from "redux-thunk";

const reducers = combineReducers({
  UsersDataReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
