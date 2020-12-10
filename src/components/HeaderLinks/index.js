import './styles.css';
import {
  Box,
  Button,
  Grid,
  Paper,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Avatar,
} from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  button: {
    color: 'white',
    background: '#3137BC',
    marginLeft: 50,
    marginRight: 50,
  },
}));
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

const HeaderLinks = ({ isLoggged = false }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();

  return isLoggged ? (
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
        <Link className="link-content" to="/login">
          <Paper square={true} variant="outlined" className="paper">
            Login
          </Paper>
        </Link>
        <Link className="link-content" to="/signup">
          <div className="btn-style">
            <Button variant="outlined" id="btn-unlogged">
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
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
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
            <Link to="/users/:userID/edit">
              <ListItemText primary="Profile" />
            </Link>
          </StyledMenuItem>
          <StyledMenuItem>
            <Link to="/users/:userID">
              <ListItemText primary="Edit" />
            </Link>
          </StyledMenuItem>
        </StyledMenu>
      </Grid>
    </Box>
  );
};

export default HeaderLinks;
