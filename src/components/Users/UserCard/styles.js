import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
	userCard: {
		minWidth: "280px",
		maxWidth: "500px",
		margin: "1rem",

		"@media (min-width: 1400px)": {
			margin: "2rem",
		},
	},

	paperCard: {
		display: "flex",
		flexDirection: "row",
		height: "150px",
		backgroundColor: "#555555",
		borderRadius: "1rem",
		padding: "0.5rem",
		cursor: "pointer",

		"@media (min-width: 600px)": {
			padding: "1rem",
		},
	},

	userAvatar: {
		width: "40%",
		maxWidth: "128px",
		maxHeight: "128px",
		height: "60%",
		margin: "0 0.2rem",

		"& img": {
			width: "100%",
			height: "100%",
			borderRadius: "1rem",
		},

		"@media (min-width: 600px)": {
			height: "100%",
		},
	},

	userInfo: {
		margin: "0 auto",
		textAlign: "center",
	},

	devName: {
		color: "#000",
		backgroundColor: " #fff",
		borderRadius: "0.5rem",
		padding: "0.2rem 0.5rem",
		margin: "0.5rem auto 1rem",

		minWidth: "150px",
		width: "fit-content",
		maxWidth: "180px",
		whiteSpace: "nowrap",
		overflow: "hidden",

		"& *": {
			fontSize: "16px",
		},

		"@media (min-width: 600px)": {
			minWidth: "250px",
			maxWidth: "300px",
			padding: "0.2rem 0.8rem",
			marginBottom: "2rem",

			"& *": {
				fontSize: "20px",
			},
		},
	},
	jobInfo: {
		"& span": {
			margin: "0.2rem 0.5rem",
		},
	},
}));

export const blank_image =
	"https://live.staticflickr.com/65535/50703410456_55128821b6_z.jpg";
