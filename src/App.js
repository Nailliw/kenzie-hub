import "./App.css";
import { CssBaseline, Container } from "@material-ui/core";

import NavBar from "./components/NavBar";

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

        <NavBar />
        <Routes />
      </Container>
    </>
  );
};

export default App;
