import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
	userRoot: {
		width: "80%",
		height: "100%",
		borderRadius: "5rem 0",
		margin: "1rem auto",

		"@media (min-width: 500px)": {
			height: "40%",
			minWidth: "350px",
			maxWidth: "400px",
		},

		"@media (min-width: 768px)": {
			height: "25%",
		},
	},

	userEditContainer: {
		paddingBottom: "2rem",
	},

	profileInformationCard: {
		backgroundColor: " white ",
		padding: "20px",

		width: "70%",
		margin: "1rem auto",

		"@media (min-width: 500px)": {
			margin: "2rem auto",
			maxWidth: "400px",
		},

		"@media (min-width: 768px)": {
			minWidth: "300px",
		},

		"@media (min-width: 1000px)": {
			minWidth: "400px",
			margin: "1rem auto",
		},

		"@media (min-width: 1200px)": {
			minWidth: "500px",
			margin: "1rem auto",
		},
	},

	media: {
		height: "200px",
		width: "200px",
		margin: "0 auto",
		borderRadius: "10rem",
	},

	profileInfo: {
		width: "80%",

		margin: "0 auto",
	},

	editProfile: {
		margin: "auto",
	},

	inputPhoto: {
		display: "flex",
		justifyContent: "space-between",

		"& *": {
			width: "40%",
			height: "50px",
			textAlign: "center",
		},
	},

	inputButton: {
		marginRight: "0.2rem",

		"@media (min-width: 500px)": {
			marginRight: "1rem",
		},
	},

	inputData: {
		marginTop: "2rem",
		borderTop: "4px solid black",
		borderBottom: "4px solid black",

		paddingTop: "2rem",
		paddingBottom: "2rem",
		width: "80%",
		margin: "0 auto",

		"@media (min-width: 700px)": {
			display: "flex",
		},
	},

	hardSkillsTitle: {
		fontSize: "2rem",
		fontWeight: "bolder",
		color: "white !important",
		textAlign: "center",
	},

	worksTitle: {
		fontSize: "2rem",
		fontWeight: "bolder",
		color: "white ",
		textAlign: "center",

		width: "80%",
		padding: "1rem",
		margin: "2rem auto",
		border: "2px solid black",
		borderRadius: "1rem",
		backgroundColor: "rgba(0,0,0,0.300)",

		"@media (min-width: 500px)": {
			width: "60%",
		},

		"@media (min-width: 700px)": {
			width: "40%",
		},

		"@media (min-width: 1000px)": {
			width: "30%",
		},
	},

	infoTitle: {
		margin: "1rem auto",
		padding: "1rem",
		color: "black ",
		width: "80%",
		textAlign: "center",

		border: "2px solid black",
		borderRadius: "1rem",
		backgroundColor: "rgba(255,255,255,1)",

		"@media (min-width: 500px)": {
			width: "60%",
		},

		"@media (min-width: 700px)": {
			width: "40%",
		},

		"@media (min-width: 1000px)": {
			width: "30%",
		},
	},

	workContainer: {
		borderTop: "4px solid black",
		margin: "1rem auto",
		minWidth: "200px",

		"@media (min-width: 780px)": {
			width: "80%",
		},

		"@media (min-width: 1000px)": {
			width: "100%",
		},
	},

	techContainer: {
		borderTop: "4px solid black",
		margin: "1rem auto",

		"@media (min-width: 780px)": {
			width: "80%",
		},

		"@media (min-width: 1000px)": {
			width: "100%",
		},
	},
}));
