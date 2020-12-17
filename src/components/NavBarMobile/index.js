import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  Button,
  Avatar,
  Menu,
  MenuItem,
  Fade,
  Typography,
  AppBar,
  Toolbar,
} from "@material-ui/core";
import { logoutUserThunk } from "../../store/modules/loggedUser/thunk";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBarMobile = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const history = useHistory();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.LoggedUserReducer.token);
  const [toggleLogout, setToggleLogout] = useState(false);

  const classes = useStyles();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlelogout = () => {
    setToggleLogout(!toggleLogout);
    dispatch(logoutUserThunk());
  };

  useEffect(() => {
    if (!token) {
      history.push("/login");
    }
  }, [token, toggleLogout]);

  return !token ? (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link className="link-content" to="/">
              <Button>Home</Button>
            </Link>
          </Typography>

          <div>
            <Button
              aria-controls="fade-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
            </Button>
            <Menu
              id="fade-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={handleClose}>
                <Link to="/login">Login</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to="/users">Devs</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to="/signup">Cadastro</Link>
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  ) : (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div>
            <Button
              aria-controls="fade-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </IconButton>
            </Button>
            <Menu
              id="fade-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={handleClose}>
                <Link to="/users/">Users</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to={`/users/profile`}>Profile</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to={`/users/profile/edit`}>Edit Profile</Link>
              </MenuItem>
            </Menu>
          </div>

          <Typography variant="h6" className={classes.title}>
            USERS
          </Typography>
          <Button onClick={handlelogout}>Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBarMobile;
