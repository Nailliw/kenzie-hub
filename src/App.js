import './App.css';
import NavBarMobile from './components/NavBarMobile';
import NavBarDesktop from './components/NavBarDesktop';
import Routes from './routes/index';
import { useState } from 'react';

const App = () => {
  const [screenWidth, setScreenWidth] = useState(window.screen.width);

  return (
    <>
      {screenWidth > 700 ? <NavBarDesktop /> : <NavBarMobile />}

      <Routes />
    </>
  );
};

export default App;
