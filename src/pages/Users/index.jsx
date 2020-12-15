import { useDispatch } from "react-redux";
import { getUsersThunk } from "../../store/modules/usersData/thunk";

import { useStyles } from "./styles.js";
import { Box, Grid, Typography } from "@material-ui/core";

import SearchBar from "../../components/users/SearchBar";
import UserList from "../../components/users/UserList";
import UsersNavBar from "../../components/users/UsersNavBar";

const Users = () => {
	const classes = useStyles();

	const dispatch = useDispatch();
	dispatch(getUsersThunk());

	return (
		<Box className={classes.usersContainer}>
			<Typography gutterBottom component="h2" variant="h2" align="center">
				Desenvolvedores
			</Typography>
			<Grid container justify="center" alignItems="center">
				<Grid item component={SearchBar} />
				<Grid item component={UserList} />
				<Grid item component={UsersNavBar} />
			</Grid>
		</Box>
	);
};

export default Users;
