import { useDispatch } from "react-redux";
import { getUsersThunk } from "../../store/modules/usersList/thunk";

import { useStyles } from "./styles.js";
import { Box, Grid, Typography } from "@material-ui/core";

import SearchBar from "../../components/Users/SearchBar";
import UserList from "../../components/Users/UserList";
import UsersNavBar from "../../components/Users/UsersNavBar";

const Users = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  dispatch(getUsersThunk());

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
};

export default Users;
