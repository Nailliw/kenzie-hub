import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  usersContainer: {
    boxSizing: "border-box",
    backgroundColor: "#282c34",
    maxWidth: "100%",
    fontSize: " calc(10px + 2vmin)",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
  },

  devTitle: {
    fontSize: "2.5rem",
    marginTop: "1rem",

    "@media (min-width: 600px)": {
      fontSize: "5rem",
    },
  },
}));
