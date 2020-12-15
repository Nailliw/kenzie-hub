import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

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
import { useHistory } from "react-router-dom";
const NavBarDesktop = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();
  let history = useHistory();
  //selectors

  const token = useSelector(
    ({
      UsersDataReducer: {
        loggedUser: { token },
      },
    }) => token,
  );
  const user_avatar = useSelector(
    ({
      UsersDataReducer: {
        loggedUser: {
          user: { avatar_url },
        },
      },
    }) => avatar_url,
  );

  //handle/buttons functions
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handlelogout = () => {
    window.localStorage.removeItem("loggedUser");
    history.push("/");
  };

  return token === "" ? (
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
                USERS
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
                USERS
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
              <Avatar src={user_avatar} />
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
