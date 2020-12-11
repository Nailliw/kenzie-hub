import './App.css';
import NavBarMobile from './components/NavBarMobile';
import NavBarDesktop from './components/NavBarDesktop';
import Routes from './routes/index';
import { useState } from 'react';
import { CssBaseline, Typography, Container } from '@material-ui/core';
const App = () => {
  //const [screenWidth, setScreenWidth] = useState(window.screen.width);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <Typography
          component="div"
          style={{ backgroundColor: '#cfe8fc', height: '100vh' }}
        >
          {window.screen.width > 1024 ? <NavBarDesktop /> : <NavBarMobile />}
          <Routes />
        </Typography>
      </Container>
    </>
  );
};

export default App;
