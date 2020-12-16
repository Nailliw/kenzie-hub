import React, { useState } from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { useDispatch, useSelector } from "react-redux";
import { IsLogged } from "../IsLogged";
import { logoutUserThunk } from "../../store/modules/loggedUser/thunk";
=======
import { useSelector, useDispatch } from "react-redux";
import { logoutUserThunk } from "../../store/modules/loggedUser/thunk";
import { IsLogged } from "../IsLogged";
>>>>>>> 15ba07b330f4297169bc69fd76441837996f085b
import "./styles.css";
import HomeIcon from "@material-ui/icons/Home";
import {
  Typography,
  Button,
  Paper,
  ListItemText,
  Avatar,
  AppBar,
  Toolbar,
} from "@material-ui/core";
import { useStyles, StyledMenu, StyledMenuItem } from "./helper";
import IsValidState from "../IsValidState";
import { useHistory } from "react-router-dom";
const NavBarDesktop = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();
  let history = useHistory();
  const dispatch = useDispatch();
<<<<<<< HEAD

  //selectors
  const user_avatar = useSelector(
    ({
      UsersDataReducer: {
        loggedUser: {
          user: { avatar_url },
        },
      },
    }) => avatar_url,
  );
=======
  const [toggleLogout, setToggleLogout] = useState(false);
  //selectors

  const loggedUser = useSelector((state) => state.LoggedUserReducer);
  const token = useSelector((state) => state.LoggedUserReducer.token);
>>>>>>> 15ba07b330f4297169bc69fd76441837996f085b

  //handle/buttons functions
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlelogout = () => {
<<<<<<< HEAD
    dispatch(logoutUserThunk());
    history.push("/");
  };

  return !IsLogged(dispatch) ? (
=======
    setToggleLogout(!toggleLogout);
    dispatch(logoutUserThunk());
  };

  useEffect(() => {
    if (!IsLogged(dispatch)) {
      history.push("/login");
    }
  }, [token, toggleLogout]);

  return !token ? (
>>>>>>> 15ba07b330f4297169bc69fd76441837996f085b
    <header>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link style={{ textDecoration: "none" }} to="/">
              <HomeIcon fontSize="large" />
            </Link>
          </Typography>
          <Paper className={classes.papers} variant="outlined" square>
            <Button className={classes.papersbtn}>
              <Link style={{ textDecoration: "none" }} to="/users">
                DEVS
              </Link>
            </Button>
          </Paper>
          <Paper className={classes.papers} variant="outlined" square>
            <Button className={classes.papersbtn}>
              <Link style={{ textDecoration: "none" }} to="/login">
                LOGIN
              </Link>
            </Button>
          </Paper>
          <Paper>
            <Link style={{ textDecoration: "none" }} to="/register">
              <Button>Cadastre-se</Button>
            </Link>
          </Paper>
        </Toolbar>
      </AppBar>
    </header>
  ) : (
    <header>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link style={{ textDecoration: "none" }} to="/">
              <HomeIcon fontSize="large" />
            </Link>
          </Typography>
          <Paper className={classes.papers} variant="outlined" square>
            <Button className={classes.papersbtn}>
              <Link style={{ textDecoration: "none" }} to="/users">
                DEVS
              </Link>
            </Button>
          </Paper>
          <div className="btn-style">
            {" "}
            <Button
              id="btn-logged"
              aria-controls="customized-menu"
              aria-haspopup="true"
              color="default"
              variant="text"
              onClick={handleClick}
            >
              <Avatar
                src={
                  IsValidState(loggedUser.user.avatar_url) &&
                  loggedUser.user.avatar_url
                }
              />
            </Button>
          </div>

          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <StyledMenuItem>
              <Link style={{ textDecoration: "none" }} to={`/users/profile`}>
                <ListItemText primary="Profile" />
              </Link>
            </StyledMenuItem>
            <StyledMenuItem>
              <Link
                style={{ textDecoration: "none" }}
                to={`/users/profile/edit`}
              >
                <ListItemText primary="Edit Profile" />
              </Link>
            </StyledMenuItem>
            <StyledMenuItem>
              <ListItemText primary="Logout" onClick={handlelogout} />
            </StyledMenuItem>
          </StyledMenu>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default NavBarDesktop;
