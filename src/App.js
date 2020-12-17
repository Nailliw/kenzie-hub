import "./App.css";
import { CssBaseline, Typography, Container } from "@material-ui/core";

import NavBarMobile from "./components/NavBarMobile";

import Routes from "./Routes";

const App = () => {
  return (
    <>
      <Container
        maxWidth="xl"
        disableGutters
        style={{
          backgroundColor: "#525261",
          height: "100vh",
          maxHeight: "100%",
        }}
      >
        <CssBaseline />

        <NavBarMobile />
        <Routes />
      </Container>
    </>
  );
};

export default App;
