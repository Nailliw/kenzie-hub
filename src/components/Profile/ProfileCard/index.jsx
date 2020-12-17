import React from "react";
import { useHistory } from "react-router-dom";

import { useStyles } from "./styles";

import {
	Box,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Grid,
	Button,
	TextField,
	Typography,
} from "@material-ui/core/";

const ProfileCard = ({ data, selectedUser }) => {
	const history = useHistory();
	const classes = useStyles();
	console.log(data);
	return (
		<Box className={classes.userEditContainer}>
			<Box className={classes.cardContainer}>
				<Card className={classes.userRoot} id="userCard">
					{data.avatar_url ? (
						<CardMedia
							className={classes.media}
							image={data.avatar_url}
							id="cardPhoto"
							title="User photo"
						/>
					) : (
						<CardMedia
							className={classes.media}
							id="cardPhoto"
							image="http://www.museucasadopontal.com.br/sites/default/files/styles/acervo-obras/public/artistas/artista_sem_foto_2.jpg?itok=AEfK4vPs"
							title="User photo"
						/>
					)}
					<CardContent className={classes.profileInfo}>
						<TextField
							fullWidth
							disabled
							defaultValue={data.name}
							variant="outlined"
							label="Name"
							name="name"
							margin="dense"
							type="string"
						/>
						<TextField
							fullWidth
							disabled
							defaultValue={data.bio}
							variant="outlined"
							label="Bio"
							name="bio"
							margin="dense"
							type="string"
						/>
						<TextField
							fullWidth
							disabled
							defaultValue={data.course_module}
							variant="outlined"
							label="Módulo do Curso"
							name="course_module"
							margin="dense"
							type="string"
						/>
						<TextField
							fullWidth
							disabled
							defaultValue={data.contact}
							variant="outlined"
							label="Contato"
							name="contact"
							margin="dense"
							type="string"
						/>
						<TextField
							fullWidth
							disabled
							defaultValue={data.email}
							variant="outlined"
							label="E-mail"
							name="email"
							margin="dense"
							type="string"
						/>
					</CardContent>

					<CardActions>
						{!selectedUser && (
							<Button
								className={classes.editProfile}
								color="primary"
								variant="contained"
								onClick={() => {
									history.push("/users/profile/edit");
								}}
							>
								Editar Perfil
							</Button>
						)}
					</CardActions>
				</Card>
			</Box>
			<Box className={classes.techsAndWorkContainer}>
				<div>
					<Typography
						component="h3"
						variant="h3"
						className={classes.worksTitle}
					>
						Tecnologias
					</Typography>
					<Grid className={classes.techContainer} container spacing={3}>
						{data.techs.length > 0 ? (
							data.techs.map((tech, index) => (
								<Grid item xs={(window.innerWidth < 780 && 12) || 6}>
									<Card className={classes.profileInformationCard} key={index}>
										<TextField
											fullWidth
											disabled
											defaultValue={tech.title}
											variant="outlined"
											label="Título"
											name="title"
											margin="dense"
											type="string"
										/>
										<TextField
											fullWidth
											disabled
											defaultValue={tech.status}
											variant="outlined"
											label="Status"
											name="status"
											margin="dense"
											type="string"
										/>
									</Card>
								</Grid>
							))
						) : (
							<Typography
								component="h6"
								variant="h6"
								className={classes.infoTitle}
							>
								Este Dev ainda não adicionou nenhuma Tecnologia!
							</Typography>
						)}
					</Grid>
				</div>
				<Box className={classes.workContainer}>
					<Typography
						component="h3"
						variant="h3"
						className={classes.worksTitle}
					>
						Projetos
					</Typography>
					<Grid container spacing={3}>
						{data.works.length > 0 ? (
							data.works.map((work, index) => (
								<Grid item xs={(window.innerWidth < 780 && 12) || 6}>
									<Card className={classes.profileInformationCard} key={index}>
										<TextField
											fullWidth
											disabled
											defaultValue={work.title}
											variant="outlined"
											label="Título"
											name="title"
											margin="dense"
											type="string"
										/>
										<TextField
											fullWidth
											disabled
											defaultValue={work.description}
											variant="outlined"
											label="Descrição"
											name="description"
											margin="dense"
											type="string"
										/>
										<TextField
											fullWidth
											disabled
											defaultValue={work.deploy_url}
											variant="outlined"
											label="URL"
											name="deploy_url"
											margin="dense"
											type="string"
										/>
									</Card>
								</Grid>
							))
						) : (
							<Typography
								component="h6"
								variant="h6"
								className={classes.infoTitle}
							>
								Este Dev ainda não adicionou nenhum Projeto!
							</Typography>
						)}
					</Grid>
				</Box>
			</Box>
		</Box>
	);
};

export default ProfileCard;
