import { makeStyles } from "@material-ui/core";
import background from "./img/login-background-kenzie.jpg";
import logo from "./img/logo-kenzie-hub.png";

const useStyles = makeStyles(() => ({
  main: {
    backgroundImage: `url(${background})`,
    backgroundPositionX: "-179px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    overflow: "hidden",
    height: "90vh",
    width: "100vw",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "@media (min-width: 1000px)": {
      backgroundPosition: "bottom",
    },
  },

  formRegister: {
    backgroundColor: "rgba(255, 255, 255, 0.883)",
    maxWidth: "400px",
    maxHeight: "650px",
    width: "80vw",
    height: "60vh",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    borderRadius: "2rem",
    boxShadow: "0.1em 0.1em 0.2em black",

    "@media (min-width: 500px)": {
      height: "50vh",
    },
  },

  formInfo: {
    height: "24%",
    width: "100%",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },

  logo: {
    backgroundImage: `url(${logo})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",

    minHeight: "50px",
    minWidth: "30px",
    width: "35%",
    height: "90%",
  },

  inputArea: {
    height: "50%",
    width: "100%",

    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",

    "@media (min-width: 500px)": {
      height: "40%",
    },
  },

  inputField: {
    width: "80%",
    height: "45%",
    // paddingBottom: "2rem",
    display: "flex",
    alignItems: "baseline",
    justifyContent: "center",
  },

  input: {
    width: "100%",
    height: "13%",
    margin: "0",

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
    width: "50%",
    height: "60%",
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
