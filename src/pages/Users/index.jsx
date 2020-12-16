import { useDispatch } from "react-redux";
import { getUsersThunk } from "../../store/modules/usersList/thunk";
import { clearSelectUserThunk } from "../../store/modules/selectedUser/thunk";
import { useEffect } from "react";

import { useStyles } from "./styles.js";
import { Box, Grid, Typography } from "@material-ui/core";

import SearchBar from "../../components/Users/SearchBar";
import UserList from "../../components/Users/UserList";
import UsersNavBar from "../../components/Users/UsersNavBar";

const Users = () => {
	const classes = useStyles();

	const dispatch = useDispatch();
	dispatch(getUsersThunk());

<<<<<<< HEAD
  useEffect(() => {
    dispatch(clearSelectUserThunk());
  }, []);

  return (
    <Box className={classes.usersContainer}>
      <Typography gutterBottom component="h1" variant="h1" align="center">
        Desenvolvedores
      </Typography>
      <Grid container justify="center" alignItems="center">
        <Grid item component={SearchBar} />
        <Grid item component={UserList} />
        <Grid item component={UsersNavBar} />
      </Grid>
    </Box>
  );
=======
	return (
		<Box className={classes.usersContainer}>
			<Typography
				className={classes.devTitle}
				component="h1"
				variant="h1"
				align="center"
			>
				Desenvolvedores
			</Typography>
			<Grid container justify="center" alignItems="center">
				<Grid item component={SearchBar} />
				<Grid item component={UserList} />
				<Grid item component={UsersNavBar} />
			</Grid>
		</Box>
	);
>>>>>>> 905f1dff9ffad8eec95e60421aac90320492773b
};

export default Users;
