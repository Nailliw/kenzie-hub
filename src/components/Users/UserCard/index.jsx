import "./styles.js";
import { useStyles, blank_image } from "./styles";
import { Grid, Paper, Box, Chip, Typography } from "@material-ui/core";

import { useHistory } from "react-router-dom";

const UserCard = ({ user }) => {
	const classes = useStyles();

	const history = useHistory();

	const { id, name, avatar_url, techs, works } = user;

	const splitedName = name.split(" ");
	const firstName = splitedName[0];
	const lastName = splitedName[splitedName.length - 1];

	const displayName = `${firstName} ${lastName}`;

	return (
		<Grid
			item
			className={classes.userCard}
			onClick={() => history.push(`/users/${id}`)}
		>
			<Paper className={classes.paperCard} elevation={24}>
				<Box className={classes.userAvatar}>
					<Box
						component="img"
						alt="Foto de Perfil"
						src={avatar_url ? avatar_url : blank_image}
					/>
				</Box>
				<Box className={classes.userInfo}>
					<Box>
						<Paper className={classes.devName} elevation={24}>
							<Typography component="h5" variant="h5">
								{displayName}
							</Typography>
						</Paper>
					</Box>

					{techs && (
						<Box className={classes.jobInfo}>
							<Chip
								component="span"
								color="primary"
								clickable
								label={`Tecnologias: ${techs.length}`}
							/>
							<Chip
								component="span"
								color="secondary"
								clickable
								label={`Trabalhos: ${works.length}`}
							/>
						</Box>
					)}
				</Box>
			</Paper>
		</Grid>
	);
};

export default UserCard;
