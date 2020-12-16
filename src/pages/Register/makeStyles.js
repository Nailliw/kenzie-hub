import { makeStyles } from "@material-ui/core";
import background from "./img/register-kenzie-hub-blended.png";
import logo from "./img/logo-kenzie-academy.png";

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    overflow: "hidden",
    height: "94vh",
    maxWidth: "100vw",
    maxHeight: "100%",
    display: "flex",
    alignItems: "center",
  },

  root: {
    marginLeft: "10vw",
    backgroundColor: "rgba(255, 255, 255, 0.883)",
    width: "30vw",
    height: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    boxShadow: "0.1em 0.1em 0.2em black",
  },

  logo: {
    backgroundImage: `url(${logo})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "70px",
    height: "70px",
  },

  labelCadastro: {
    width: "80%",
    backgroundColor: "red",
    fontWeight: "500",
    textAlign: "center",
    color: "rgb(8,53,108)",
    textShadow: "0.02em 0.05em 0.02em rgb(0,0,0)",
  },

  input: {
    width: "60%",

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
    margin: theme.spacing(1),
    minWidth: "60%",
    maxWidth: "60%",
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

  selectEmpty: {
    marginTop: theme.spacing(2),
  },

  feedbackMessage: {
    width: "100%",
    height: "5vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  loginButton: {
    width: "40%",
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
