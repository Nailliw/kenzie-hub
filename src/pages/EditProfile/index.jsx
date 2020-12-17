import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import IsValidState from "../../components/IsValidState";
import { IsLogged } from "../../components/IsLogged";

import {
  changeProfileThunk,
  changeTechStatusThunk,
  changeWorkInfoThunk,
  deleteTechThunk,
  deleteWorkThunk,
  updateLoggedUserThunk,
  uploadUserAvatarThunk,
} from "../../store/modules/loggedUser/thunk";

import UserTechs from "../../components/EditProfile/UserTechs";
import UserWorks from "../../components/EditProfile/UserWorks";

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

import { useStyles } from "./styles";

const EditProfile = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const history = useHistory();

  const loggedUser = useSelector((state) => state.LoggedUserReducer);
  const data = loggedUser.user;

  const [techs, setTechs] = useState();
  const [works, setWorks] = useState();
  const [name, setName] = useState();
  const [bio, setBio] = useState();
  const [course_module, setCourse_module] = useState();
  const [contact, setContact] = useState();
  const [email, setEmail] = useState();
  const [photo, setPhoto] = useState(null);

  const handleAvatarChange = (e) => {
    const newData = new FormData();
    newData.append("avatar", e.target.files[0]);
    setPhoto(newData);
  };

  const handleSalvarPhoto = () => {
    dispatch(uploadUserAvatarThunk(photo));
  };

  useEffect(() => {
    if (!IsLogged(dispatch)) {
      history.push("/login");
    }
  }, []);

  useEffect(() => {
    if (!IsLogged(dispatch)) {
      history.push("/login");
    }
    if (IsValidState(data)) {
      setTechs(data.techs);
      setWorks(data.works);
    }
  }, [loggedUser.token]);

  useEffect(() => {
    if (IsValidState(data)) {
      setTechs(data.techs);
      setWorks(data.works);
      history.push("/users/profile/edit");
    }
  }, [data]);

  return (
    <>
      {IsValidState(data) && (
        <Box className={classes.userEditContainer}>
          <Box className={classes.cardContainer}>
            <Card className={classes.userRoot}>
              {IsValidState(data.avatar_url) ? (
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
                <Box className={classes.inputPhoto}>
                  <Button size="small" variant="contained" component="label">
                    Selecionar Foto
                    <input type="file" hidden onChange={handleAvatarChange} />
                  </Button>
                  <Button
                    size="small"
                    variant="contained"
                    color="secondary"
                    onClick={handleSalvarPhoto}
                  >
                    Salvar Foto
                  </Button>
                </Box>

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
                  variant="contained"
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
                    history.push("/users/profile/edit");
                  }}
                >
                  Salvar Alterações
                </Button>
              </CardActions>
            </Card>
          </Box>

          <Box>
            <Box className={classes.inputData}>
              <UserTechs />
              <UserWorks />
            </Box>
            <Box className="test">
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
                    <Card
                      className={classes.profileInformationCard}
                      key={index}
                    >
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
                        color="secondary"
                        variant="contained"
                        className={classes.inputButton}
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
                          setTimeout(() => {
                            history.push("/users/profile");
                          }, 1000);
                        }}
                      >
                        Salvar Tech
                      </Button>
                      <Button
                        variant="outlined"
                        onClick={(e) => {
                          console.log(tech.id);
                          dispatch(deleteTechThunk(tech.id));
                        }}
                      >
                        Remover
                      </Button>
                    </Card>
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
            </Box>
            <Box className={classes.workContainer}>
              <Typography
                component="h3"
                variant="h3"
                className={classes.worksTitle}
              >
                Projetos
              </Typography>
              <Grid className={classes.workContainer} container spacing={3}>
                {data.works.length > 0 ? (
                  IsValidState(works) &&
                  IsValidState(data) &&
                  data.works.map((work, index) => (
                    <Grid item xs={(window.innerWidth < 780 && 12) || 6}>
                      <Card
                        className={classes.profileInformationCard}
                        key={index}
                      >
                        <TextField
                          fullWidth
                          defaultValue={work.title}
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
                          defaultValue={work.description}
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
                          defaultValue={work.deploy_url}
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
                          className={classes.inputButton}
                          color="secondary"
                          variant="contained"
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
                            setTimeout(() => {
                              history.push("/users/profile");
                            }, 1000);
                          }}
                        >
                          Salvar Projeto
                        </Button>
                        <Button
                          variant="outlined"
                          onClick={(e) => {
                            dispatch(deleteWorkThunk(work.id));
                          }}
                        >
                          Remover
                        </Button>
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
      )}
    </>
  );
};

export default EditProfile;
