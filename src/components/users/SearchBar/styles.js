import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
	searchBarBox: {
		width: "100%",
		minWidth: "300px",
		maxWidth: "600px",
		margin: "0.5rem auto",
	},
	searchBar: {
		width: "80%",
		margin: "0 auto",
		borderRadius: "2rem",
		backgroundColor: "rgba(255, 255, 255, 0.514)",
	},
}));
