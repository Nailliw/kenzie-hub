import { useEffect } from "react";
import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";

import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";

import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUserWorkThunk } from "../../store/modules/loggedUser/thunk";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

const UserWorks = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const schema = yup.object().shape({
    title: yup.string().required("Required field"),
    description: yup.string().required("Required field"),
    deploy_url: yup.string().required("Required field"),
  });

  const { register, handleSubmit, errors, setError } = useForm({
    resolver: yupResolver(schema),
  });

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200,
      maxWidth: 200,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(0.3),
        width: "80%",
      },
    },
  }));

  const classes = useStyles();

  const handleForm = (data) => {
    dispatch(addUserWorkThunk(data));
    console.log(data);
    history.push("/users/profile");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleForm)} className={classes.root}>
        <h1 className="labelCadastro">Adicionar Work</h1>

        <TextField
          variant="outlined"
          label="Nome"
          name="title"
          margin="dense"
          type="string"
          inputRef={register}
          error={!!errors.title}
          helperText={errors.title?.message}
        />

        <TextField
          variant="outlined"
          label="Descrição"
          name="description"
          margin="dense"
          type="string"
          inputRef={register}
          error={!!errors.title}
          helperText={errors.title?.message}
        />

        <TextField
          variant="outlined"
          label="URL"
          name="deploy_url"
          margin="dense"
          type="string"
          inputRef={register}
          error={!!errors.title}
          helperText={errors.title?.message}
        />

        <Button
          type="submit"
          className="LoginButton"
          variant="contained"
          color="primary"
        >
          Adicionar Work
        </Button>
        <p style={{ color: "red" }}>{errors.registerError?.message}</p>
      </form>
    </div>
  );
};

export default UserWorks;
