import {
  Button,
  Avatar,
  Menu,
  MenuItem,
  Fade,
  Typography,
  AppBar,
  Toolbar,
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

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
  const token = useSelector(
    ({
      UsersDataReducer: {
        loggedUser: { token },
      },
    }) => token,
  );
  const user_id = useSelector(
    ({
      UsersDataReducer: {
        loggedUser: {
          user: { id },
        },
      },
    }) => id,
  );

  const classes = useStyles();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return token === '' ? (
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
                <Link to={`/users/:${user_id}`}>Profile</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to={`/users/:${user_id}/edit`}>Edit Profile</Link>
              </MenuItem>
            </Menu>
          </div>

          <Typography variant="h6" className={classes.title}>
            USERS
          </Typography>
          <Button>Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBarMobile;
