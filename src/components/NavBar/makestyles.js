import { makeStyles } from "@material-ui/core/styles";
import background from "../../pages/Login/styles/img/logo-kenzie-hub.png";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    height: "90%",
    width: "100%",
  },
  title: {
    flexGrow: 1,
  },
  btnlogged: {
    height: "100%",
    width: "100%",
    background: "none",
    justifyContent: "center",
  },

  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  appbar: {
    // width: "100vw",
    maxWidth: "100vw",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    background: "#e2e2e2",
    height: "10vh",
  },
  barra01: {
    paddingLeft: "5vw",
    height: "100%",
    width: "50vw",
    display: "flex",
    alignItems: "center",
  },
  barra02: {
    paddingRight: "5vw",
    height: "100%",
    width: "50vw",
    display: "flex",
    justifyContent: "flex-end",
  },
  barra03: {
    paddingLeft: "5vw",
    height: "100%",
    width: "30vw",
    display: "flex",
    alignItems: "center",
  },
  barra04: {
    height: "100%",
    width: "30vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  barra05: {
    paddingRight: "5vw",
    height: "100%",
    width: "30vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  btn_menu: {
    height: "100%",
    width: "100%",
  },
  menu_item: {
    height: "100%",
    width: "100%",
    "&:hover": {
      backgroundColor: "#c4c4c4",
    },
  },
  btn_home: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));
export default useStyles;
