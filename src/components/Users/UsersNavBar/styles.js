import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
	usersNavBar: {
		width: "30%",
		minWidth: "280px",
		margin: "2rem auto",
		padding: "1rem",
		textAlign: "center",
		borderRadius: "2rem",
		color: "rgb(0,0,0)",
		backgroundColor: "rgb(255, 255, 255)",
		"& > span": {
			margin: "0 1rem",
			padding: "0.2rem 0.7rem",
			border: "1px solid #000",
			borderRadius: "0.5rem",
		},
	},
}));
