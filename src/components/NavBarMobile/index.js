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
  btn_menu: {
    width: "100%",
  },
  menu_item: {
    "&:hover": {
      backgroundColor: "#c4c4c4",
    },
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
    <AppBar className={classes.appbar} position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <Button onClick={() => history.push("/")}>Home</Button>
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
          <MenuItem className={classes.menu_item} onClick={handleClose}>
            <Button
              className={classes.btn_menu}
              onClick={() => history.push("/login")}
            >
              Login
            </Button>
          </MenuItem>
          <MenuItem className={classes.menu_item} onClick={handleClose}>
            <Button
              className={classes.btn_menu}
              onClick={() => history.push("/users")}
            >
              Devs
            </Button>
          </MenuItem>
          <MenuItem className={classes.menu_item} onClick={handleClose}>
            <Button
              className={classes.btn_menu}
              onClick={() => history.push("/register")}
            >
              Cadastro
            </Button>
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
          <Avatar className={classes.avatar} alt="Remy Sharp">
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
          <MenuItem className={classes.menu_item} onClick={handleClose}>
            <Button
              className={classes.btn_menu}
              onClick={() => history.push(`/users/profile`)}
            >
              Perfil
            </Button>
          </MenuItem>
          <MenuItem className={classes.menu_item} onClick={handleClose}>
            <Button
              className={classes.btn_menu}
              onClick={() => history.push(`/users/profile/edit`)}
            >
              Editar Perfil
            </Button>
          </MenuItem>
          <MenuItem className={classes.menu_item} onClick={handleClose}>
            <Button className={classes.btn_menu} onClick={handlelogout}>
              Sair
            </Button>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
export default NavBarMobile;
