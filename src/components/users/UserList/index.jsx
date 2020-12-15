import { useSelector } from "react-redux";

import { useStyles } from "./styles";
import { Grid } from "@material-ui/core";

import UserCard from "../UserCard";

const UserList = () => {
	const classes = useStyles();

	const usersList = useSelector(
		({ UsersDataReducer: { usersList } }) => usersList
	);

	return (
		<Grid
			container
			alignItems="center"
			justify="center"
			direction="column"
			className={classes.usersList}
		>
			{usersList.map((user, index) => {
				return <UserCard key={index} user={user} />;
			})}
		</Grid>
	);
};

export default UserList;
