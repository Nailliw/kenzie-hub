import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
	userCard: {
		width: "60%",
		minWidth: "300px",
		maxWidth: "600px",
		margin: "1rem",
	},
	userAvatar: {
		width: "20%",
		margin: "0 0.2rem",
		"& img": {
			width: "100%",
			height: "100%",
			borderRadius: "1rem",
		},
	},

	paperCard: {
		display: "flex",
		flexDirection: "row",
		height: "150px",
		backgroundColor: "#555555",
		borderRadius: "1rem",
		padding: "1rem",
		cursor: "pointer",
	},

	userInfo: {
		margin: "0 auto",
		textAlign: "center",
	},

	devName: {
		backgroundColor: " #979797",
		borderRadius: "0.5rem",
		padding: "0.2rem 1rem",
		width: "fit-content",
		margin: "1rem auto",
	},
	jobInfo: {
		"& span": {
			margin: "0.2rem 0.5rem",
		},
	},
}));

export const blank_image =
	"https://live.staticflickr.com/65535/50703410456_55128821b6_z.jpg";
