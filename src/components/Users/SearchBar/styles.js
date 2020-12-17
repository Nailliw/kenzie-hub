import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
	searchBarBox: {
		width: "100%",
		minWidth: "300px",
		maxWidth: "600px",
		margin: "2rem auto",
	},
	searchBar: {
		width: "80%",
		margin: "0 auto",
		borderRadius: "1rem",
		backgroundColor: "rgb(255, 255, 255)",
	},
}));
