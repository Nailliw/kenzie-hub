import { makeStyles } from "@material-ui/core";
import background from "./img/register-kenzie-hub-blended.jpg";
import logo from "./img/logo-kenzie-academy.png";

const useStyles = makeStyles(() => ({
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
  },

  formRegister: {
    backgroundColor: "rgba(255, 255, 255, 0.883)",
    boxShadow: "0.1em 0.1em 0.2em black",
    minWidth: "250px",
    maxHeight: "850px",
    margin: "4vw",
    borderRadius: "2rem",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",

    "@media (min-width: 900px)": {
      marginLeft: "10vw",
      padding: "1rem",
    },

    "@media (min-width: 1100px)": {
      marginLeft: "20vw",
      minWidth: "500px",
      width: "25vw",
      minHeight: "72vh",
    },
  },

  formInfo: {
    height: "14%",
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
    width: "20%",
  },

  labelCadastro: {
    fontSize: "1.8rem",
    fontWeight: "500",
    paddingBottom: "0.5rem",
    textAlign: "center",
    color: "rgb(8,53,108)",
    textShadow: "0.02em 0.05em 0.02em rgb(0,0,0)",

    "@media (min-width: 1100px)": {
      fontSize: "2.5rem",
      paddingBottom: "1.5rem",
    },
  },

  inputArea: {
    height: "70%",
    width: "100%",
    paddingTop: "0.2rem",

    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },

  inputField: {
    width: "80%",
    height: "30%",
    paddingBottom: "0.2rem",
    padding: "10px",
    display: "flex",
    alignItems: "baseline",
    justifyContent: "center",

    "@media (min-width: 1100px)": {
      paddingBottom: "0.5rem",
    },
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

  select: {
    margin: "0.5rem",
    minWidth: "100%",
    maxWidth: "100%",

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
    "& option": {
      width: "10px",
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
    width: "40%",
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
