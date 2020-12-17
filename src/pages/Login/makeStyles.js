import { makeStyles } from "@material-ui/core";
import background from "./img/login-background-kenzie.png";
import logo from "./img/logo-kenzie-hub.png";

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    overflow: "hidden",
    height: "90vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  formRegister: {
    marginRight: "15vw",
    backgroundColor: "rgba(255, 255, 255, 0.883)",
    width: "30vw",
    height: "60vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    boxShadow: "0.1em 0.1em 0.2em black",
  },

  formInfo: {
    height: "24%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    backgroundImage: `url(${logo})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "35%",
    height: "90%",
  },

  inputArea: {
    height: "33%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },

  inputField: {
    width: "50%",
    height: "40%",
    display: "flex",
    alignItems: "baseline",
    justifyContent: "center",
  },

  input: {
    width: "100%",
    height: "13%",
    margin: "10px",
    "& label.Mui-focused": {
      color: "rgb(8,53,108)",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "rgb(8,53,108)",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "rgb(8,53,108)",
      },
    },
  },

  // ---------

  feedbackMessage: {
    width: "100%",
    height: "5vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  formBottom: {
    width: "100%",
    height: "14%",
    color: "red",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  loginButton: {
    alignItems: "center",
    width: "30%",
    height: "40%",
    color: "white",
    backgroundColor: "rgba(8,53,108)",
    border: "1px solid black",
    marginTop: "10px",
    "&:hover": {
      backgroundColor: "rgba(28,73,128)",
      boxShadow: "0.1em 0.1em 0.2em black",
    },
  },
}));

export default useStyles;
