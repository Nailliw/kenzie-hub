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

const EditProfile = () => {
  const loggedUser = useSelector((state) => state.LoggedUserReducer);
  const dispatch = useDispatch();
  const history = useHistory();
  const data = loggedUser.user;
  const classes = useStyles();
  const [techs, setTechs] = useState();
  const [works, setWorks] = useState();
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
    if (data) {
      setTechs(data.techs);
      setWorks(data.works);
    }
  }, [loggedUser.token]);

  useEffect(() => {
    if (data && toggleRemove === true) {
      console.log(toggleRemove);
      setTechs(data.techs);
      setWorks(data.works);
      toggleRemove = false;
      console.log(works);
      history.push("/users/profile/edit");
    }
  }, [data]);

  return (
    <>
      {works && techs && (
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
                  defaultValue={data.name}
                  onChange={(evento) => {
                    setName(evento.target.value);
                  }}
                  variant="outlined"
                  label="Name"
                  name="name"
                  margin="dense"
                  type="string"
                />
                <TextField
                  fullWidth
                  defaultValue={data.bio}
                  onChange={(evento) => {
                    setBio(evento.target.value);
                  }}
                  variant="outlined"
                  label="Bio"
                  name="bio"
                  margin="dense"
                  type="string"
                />
                <TextField
                  fullWidth
                  defaultValue={data.course_module}
                  onChange={(evento) => {
                    setCourse_module(evento.target.value);
                  }}
                  variant="outlined"
                  label="Módulo do Curso"
                  name="course_module"
                  margin="dense"
                  type="string"
                />
                <TextField
                  fullWidth
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
                  defaultValue={data.email}
                  onChange={(evento) => {
                    setEmail(evento.target.value);
                  }}
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
                    dispatch(
                      changeProfileThunk({
                        name: name,
                        bio: bio,
                        contact: contact,
                        course_module: course_module,
                        email: email,
                      })
                    );
                  }}
                >
                  Salvar Alterações
                </Button>
              </CardActions>
            </Card>
          </div>
          <div>
            <UserTechs />
            <UserWorks />
          </div>
          <div>
            <div className="test">
              Hard skills
              <div className={classes.paperRoot}>
                {techs.map((tech, index) => (
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
                      onChange={(evento) => {
                        setTechs([
                          ...techs.map((e, i) => {
                            if (e.id === tech.id) {
                              return { ...e, status: evento.target.value };
                            }
                            return e;
                          }),
                        ]);
                      }}
                      variant="outlined"
                      label="Status"
                      name="status"
                      margin="dense"
                      type="string"
                    />
                    <Button
                      onClick={() => {
                        dispatch(
                          changeTechStatusThunk(
                            {
                              title: techs.filter((e) => {
                                return e.id === tech.id;
                              })[0].title,
                              status: techs.filter((e) => {
                                return e.id === tech.id;
                              })[0].status,
                            },
                            tech.id
                          )
                        );
                      }}
                    >
                      Editar
                    </Button>
                    <Button
                      onClick={(e) => {
                        dispatch(deleteTechThunk(tech.id));
                        toggleRemove = true;
                      }}
                    >
                      Remover
                    </Button>
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
                      defaultValue={
                        works.filter((e) => {
                          return e.id === work.id;
                        })[0].title
                      }
                      onChange={(evento) => {
                        setWorks([
                          ...works.map((e, i) => {
                            if (e.id === work.id) {
                              return { ...e, title: evento.target.value };
                            }
                            return e;
                          }),
                        ]);
                      }}
                      variant="outlined"
                      label="Título"
                      name="title"
                      margin="dense"
                      type="string"
                    />
                    <TextField
                      fullWidth
                      defaultValue={
                        works.filter((e) => {
                          return e.id === work.id;
                        })[0].description
                      }
                      onChange={(evento) => {
                        setWorks([
                          ...works.map((e, i) => {
                            if (e.id === work.id) {
                              return {
                                ...e,
                                description: evento.target.value,
                              };
                            }
                            return e;
                          }),
                        ]);
                      }}
                      variant="outlined"
                      label="Descrição"
                      name="description"
                      margin="dense"
                      type="string"
                    />
                    <TextField
                      fullWidth
                      defaultValue={
                        works.filter((e) => {
                          return e.id === work.id;
                        })[0].deploy_url
                      }
                      onChange={(evento) => {
                        setWorks([
                          ...works.map((e, i) => {
                            if (e.id === work.id) {
                              return {
                                ...e,
                                deploy_url: evento.target.value,
                              };
                            }
                            return e;
                          }),
                        ]);
                      }}
                      variant="outlined"
                      label="URL"
                      name="deploy_url"
                      margin="dense"
                      type="string"
                    />
                    <Button
                      onClick={() => {
                        dispatch(
                          changeWorkInfoThunk(
                            {
                              title: works.filter((e) => {
                                return e.id === work.id;
                              })[0].title,
                              description: works.filter((e) => {
                                return e.id === work.id;
                              })[0].description,
                              deploy_url: works.filter((e) => {
                                return e.id === work.id;
                              })[0].deploy_url,
                            },
                            work.id
                          )
                        );
                      }}
                    >
                      Editar
                    </Button>
                    <Button
                      onClick={(e) => {
                        dispatch(deleteWorkThunk(work.id));
                        toggleRemove = true;
                      }}
                    >
                      Remover
                    </Button>
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

export default EditProfile;
