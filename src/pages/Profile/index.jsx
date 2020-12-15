import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { IsLogged } from "../../components/IsLogged";
import {
  changeProfileThunk,
  changeTechStatusThunk,
  changeWorkInfoThunk,
  deleteTechThunk,
  deleteWorkThunk,
  updateLoggedUserThunk,
} from "../../store/modules/loggedUser/thunk";
import UserTechs from "../../components/UserTechs";
import UserWorks from "../../components/UserWorks";

//material ui
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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
  paperRoot: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(4),
      width: theme.spacing(24),
      height: theme.spacing(24),
    },
  },
}));

const Profile = () => {
  const loggedUser = useSelector((state) => state.LoggedUserReducer);
  const dispatch = useDispatch();
  const history = useHistory();
  const data = loggedUser.user;
  const classes = useStyles();
  const [name, setName] = useState();
  const [bio, setBio] = useState();
  const [course_module, setCourse_module] = useState();
  const [contact, setContact] = useState();
  const [email, setEmail] = useState();
  let toggleRemove = false;

  useEffect(() => {
    dispatch(updateLoggedUserThunk());
    if (!IsLogged(dispatch)) {
      history.push("/login");
    }
  }, []);

  useEffect(() => {
    if (!IsLogged(dispatch)) {
      history.push("/login");
    }
  }, [loggedUser.token]);

  return (
    <>
      {data && (
        <div style={{ display: "flex" }}>
          <div>
            <Card className={classes.userRoot}>
              {data.avatar_url ? (
                <CardMedia
                  className={classes.media}
                  image={data.avatar_url}
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
                  onChange={(evento) => {
                    setContact(evento.target.value);
                  }}
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
                <Button
                  className={classes.editProfile}
                  color="primary"
                  onClick={() => {
                    history.push("/users/profile/edit");
                  }}
                >
                  Editar Perfil
                </Button>
              </CardActions>
            </Card>
          </div>
          <div>
            <div className="test">
              Hard skills
              <div className={classes.paperRoot}>
                {data.techs.map((tech, index) => (
                  <div key={index}>
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
              projetos
              <div className={classes.paperRoot}>
                {data.works.map((work, index) => (
                  <div key={index}>
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
      )}
    </>
  );
};

export default Profile;
