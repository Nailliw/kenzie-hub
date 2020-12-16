import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUserThunk } from "../../store/modules/loggedUser/thunk";
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
import { IsLogged } from "../IsLogged";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#1480FB",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  btnlogged: {
    background: "none",
  },

  avatar: {
    marginBottom: theme.spacing(1),
  },
  appbar: {
    background: "#e2e2e2",
  },
}));

const NavBarMobile = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const classes = useStyles();

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
  //handles
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return !IsLogged(dispatch) ? (
    <AppBar className={classes.appbar} position="relative">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <Link to={`/`}>LOGO</Link>
        </Typography>

        <IconButton
          aria-controls="fade-menu"
          aria-haspopup="true"
          onClick={handleClick}
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon color="secondary" />
        </IconButton>

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
            <Link to="/register">Cadastro</Link>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  ) : (
    <AppBar className={classes.appbar} position="static">
      <Toolbar variant="dense">
        <Link to={`/`}>LOGO DA KENZIE</Link>

        <Typography className={classes.title}>
          <Button size="large">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/users/"
            >
              Users
            </Link>
          </Button>
        </Typography>
        <IconButton
          color="primary"
          className={classes.menuButton}
          edge="start"
          aria-label="menu"
        >
          <Avatar className={classes.avatar} alt="Remy Sharp" src={user_avatar}>
            <Button
              size="large"
              className={classes.btnlogged}
              aria-controls="fade-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              A
            </Button>
          </Avatar>
        </IconButton>

        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={handleClose}>
            <Link to={`/users/profile`}>Profile</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to={`/users/profile/edit`}>Edit Profile</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to={`/`}>Logout</Link>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default NavBarMobile;
