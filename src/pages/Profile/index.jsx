import { useState, useEffect } from "react";
import { Redirect, useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { IsLogged } from "../../components/IsLogged";

//material ui
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  userRoot: {
    width: "25vw",
  },
  media: {
    height: 340,
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
//

const Profile = () => {
  const loggedUser = useSelector((state) => state.LoggedUserReducer);
  const dispatch = useDispatch();
  const history = useHistory();
  const data = loggedUser.user;
  const classes = useStyles();
  const params = useParams();
  const [id, setId] = useState(params.userID);

  useEffect(() => {
    if (!IsLogged(dispatch)) {
      history.push("/login");
    }
  }, []);

  useEffect(() => {
    if (!IsLogged(dispatch)) {
      history.push("/login");
    }
  }, [loggedUser.token]);

  console.log(data);

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
                <Typography
                  gutterBottom
                  align="center"
                  variant="h4"
                  component="h1"
                >
                  {data.name}
                </Typography>
                <Typography component="p">{data.bio}</Typography>
                <Typography component="p">
                  Módulo do Curso: {data.course_module}
                </Typography>
                <Typography component="p">Contato: {data.contact}</Typography>
                <Typography component="p">E-mail: {data.email}</Typography>
              </CardContent>
              {id === "profile" && (
                <CardActions>
                  <Button
                    className={classes.editProfile}
                    color="primary"
                    onClick={() => {
                      <Redirect to="edit"></Redirect>;
                    }}
                  >
                    Editar perfil
                  </Button>
                </CardActions>
              )}
            </Card>
          </div>
          <div>
            <div className="test">
              hard skills
              <div className={classes.paperRoot}>
                {data.techs.map((tech, index) => (
                  <Paper elevation={3} key={index} className={classes.paper}>
                    skill: {tech.title}
                    nivel: {tech.status}
                  </Paper>
                ))}
              </div>
            </div>
            <div className="test">
              projetos
              {data.works.map((work, index) => (
                <div key={index}>
                  <h4>nome: {work.title}</h4>
                  <p>descrição: {work.description}</p>

                  <a href={work.deploy_url}>link</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
