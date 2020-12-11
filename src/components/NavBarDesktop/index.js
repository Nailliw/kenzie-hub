import './styles.css';
import {
  Box,
  Button,
  Grid,
  Paper,
  Menu,
  MenuItem,
  ListItemText,
  Avatar,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const NavBarDesktop = () => {
  const [anchorEl, setAnchorEl] = useState(null);

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
  const user_avatar = useSelector(
    ({
      UsersDataReducer: {
        loggedUser: {
          user: { avatar_url },
        },
      },
    }) => avatar_url,
  );

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {}, [token]);
  return token === '' ? (
    <Box bgcolor="#3F51B5">
      <Grid container direction="row" justify="flex-end" alignItems="center">
        <Link className="link-content" to="/">
          <Paper square={true} variant="outlined" className="paper">
            HOME
          </Paper>
        </Link>
        <Link className="link-content" to="/users">
          <Paper square={true} variant="outlined" className="paper">
            USERS
          </Paper>
        </Link>
        <Link className="link-content" to="/login">
          <Paper square={true} variant="outlined" className="paper">
            Login
          </Paper>
        </Link>
        <Link className="link-content" to="/signup">
          <div className="btn-style">
            <Button variant="outlined" color="primary" id="btn-unlogged">
              Cadastre-se
            </Button>
          </div>
        </Link>
      </Grid>
    </Box>
  ) : (
    <Box bgcolor="white">
      <Grid container direction="row" justify="flex-end" alignItems="center">
        <Link className="link-content" to="/">
          <Paper square={true} variant="outlined" className="paper">
            HOME
          </Paper>
        </Link>
        <Link className="link-content" to="/users">
          <Paper square={true} variant="outlined" className="paper">
            USERS
          </Paper>
        </Link>
        <div className="btn-style">
          {' '}
          <Button
            id="btn-logged"
            aria-controls="customized-menu"
            aria-haspopup="true"
            variant="contained"
            color="primary"
            onClick={handleClick}
          >
            <Avatar alt="Remy Sharp" src={user_avatar} />
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
            <Link to={`/users/profile`}>
              <ListItemText primary="Profile" />
            </Link>
          </StyledMenuItem>
          <StyledMenuItem>
            <Link to={`/users/profile/edit`}>
              <ListItemText primary="Edit Profile" />
            </Link>
          </StyledMenuItem>
          <StyledMenuItem>
            <Link to="/">
              <ListItemText primary="Logout" />
            </Link>
          </StyledMenuItem>
        </StyledMenu>
      </Grid>
    </Box>
  );
};

export default NavBarDesktop;
