import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Users from "../pages/Users";
import Profile from "../pages/Profile";
import EditProfile from "../pages/EditProfile";

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/register" component={Register} />
			<Route exact path="/users" component={Users} />
			<Route exact path="/users/:userID" component={Profile} />
			<Route exact path="/users/:userID/edit" component={EditProfile} />
		</Switch>
	);
};

export default Routes;
