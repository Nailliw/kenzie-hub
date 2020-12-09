import './styles.css';
import { Box, Button, Grid, Paper } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
/*
!1 - criar um menu de tabs dentro de um Grid
2 - um outro menu em lista que inicialmente permanece escondido
3 - criamos seletores que ativam o menu que estava escondido, e esconde o que inicialmente é mostrado para o desktop
*/

const useStyles = makeStyles(() => ({
  button: {
    color: 'white',
    background: '#3137BC',
    marginLeft: 50,
    marginRight: 50,
  },
}));

const HeaderLinks = ({ isLoggged = false }) => {
  const classes = useStyles();

  return (
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
          <Paper square={true} variant="outlined" className="paper"></Paper>
        </Link>
        <Link className="link-content" to="/signup">
          <Button variant="outlined" className={classes.button} color="white">
            Cadastre-se
          </Button>
        </Link>
      </Grid>
    </Box>
  );
};

export default HeaderLinks;
