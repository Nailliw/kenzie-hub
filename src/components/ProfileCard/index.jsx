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

const useStyles = makeStyles((theme) => ({
  userRoot: {
    width: "30vw",
  },
  media: {
    height: 235,
  },
  editProfile: {
    margin: "auto",
  },
  // paperRoot: {
  //   display: "flex",
  //   flexWrap: "wrap",
  //   "& > *": {
  //     margin: theme.spacing(4),
  //     width: theme.spacing(24),
  //     height: theme.spacing(24),
  //   },
  // },
}));

const ProfileCard = (props) => {
  const history = useHistory();
  const classes = useStyles();
  console.log(props);
  return (
    <div className="userEditContainer" style={{ display: "flex" }}>
      <div>
        <Card className={classes.userRoot}>
          {props.data.avatar_url ? (
            <CardMedia
              className={classes.media}
              image={props.data.avatar_url}
              title="User photo"
            />
          ) : (
            <CardMedia
              className={classes.media}
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
      <div>
        <div className="test">
          <p className="hardSkillsTitle">Hard Skills</p>
          <div className={classes.paperRoot}>
            {props.data.techs.map((tech, index) => (
              <div className="profileInformationCard" key={index}>
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
              </div>
            ))}
          </div>
        </div>
        <div className="test">
          <p className="worksTitle">Trabalhos</p>
          <div className={classes.paperRoot}>
            {props.data.works.map((work, index) => (
              <div className="profileInformationCard" key={index}>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
