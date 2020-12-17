import { useHistory } from "react-router-dom";

//material ui
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./style.css";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  userRoot: {
    width: "30vw",
  },
  media: {
    height: 235,
    width: "100%",
  },
  editProfile: {
    margin: "auto",
    color: "white",
  },
}));

const ProfileCard = (props) => {
  const history = useHistory();
  const classes = useStyles();
  console.log(props);
  return (
    <div className="userEditContainer">
      <div className="cardContainer">
        <Card className={classes.userRoot} id="userCard">
          {props.data.avatar_url ? (
            <CardMedia
              className={classes.media}
              image={props.data.avatar_url}
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
          <CardContent>
            <TextField
              fullWidth
              disabled
              defaultValue={props.data.name}
              variant="outlined"
              label="Name"
              name="name"
              margin="dense"
              type="string"
            />
            <TextField
              fullWidth
              disabled
              defaultValue={props.data.bio}
              variant="outlined"
              label="Bio"
              name="bio"
              margin="dense"
              type="string"
            />
            <TextField
              fullWidth
              disabled
              defaultValue={props.data.course_module}
              variant="outlined"
              label="Módulo do Curso"
              name="course_module"
              margin="dense"
              type="string"
            />
            <TextField
              fullWidth
              disabled
              defaultValue={props.data.contact}
              variant="outlined"
              label="Contato"
              name="contact"
              margin="dense"
              type="string"
            />
            <TextField
              fullWidth
              disabled
              defaultValue={props.data.email}
              variant="outlined"
              label="E-mail"
              name="email"
              margin="dense"
              type="string"
            />
          </CardContent>

          <CardActions>
            {!props.selectedUser && (
              <Button
                className={classes.editProfile}
                color="primary"
                onClick={() => {
                  history.push("/users/profile/edit");
                }}
              >
                Editar Perfil
              </Button>
            )}
          </CardActions>
        </Card>
      </div>
      <div className="techsAndWorkContainer">
        <div className="techContainer">
          <h1 className="hardSkillsTitle">Hard Skills</h1>
          <Grid container spacing={3}>
            {props.data.techs.map((tech, index) => (
              <Grid item xs={(window.innerWidth < 780 && 12) || 6}>
                <Card className="profileInformationCard" key={index}>
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
            ))}
          </Grid>
        </div>
        <div className="workContainer">
          <h1 className="worksTitle">Trabalhos</h1>
          <Grid container spacing={3}>
            {props.data.works.map((work, index) => (
              <Grid item xs={(window.innerWidth < 780 && 12) || 6}>
                <Card className="profileInformationCard" key={index}>
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
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
