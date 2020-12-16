import { makeStyles } from "@material-ui/core/styles";
import "./style.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";

import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";

import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUserTechThunk } from "../../store/modules/loggedUser/thunk";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

const UserTechs = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const schema = yup.object().shape({
    title: yup.string().required("Required field"),
    status: yup.string().required("Required field"),
  });

  const { register, handleSubmit, errors, setError } = useForm({
    resolver: yupResolver(schema),
  });

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: "75%",
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
    dispatch(addUserTechThunk(data));
    console.log(data);
    history.push("/users/profile/edit");
  };

  return (
    <form
      onSubmit={handleSubmit(handleForm)}
      id={"idformTech"}
      className={classes.root}
    >
      <h1 id="idTech">Adicionar Tech</h1>

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

      <FormControl className={classes.formControl}>
        <InputLabel
          variant="outlined"
          margin="dense"
          size="small"
          error={!!errors.status}
          id="status"
        >
          Nível
        </InputLabel>

        <Select
          error={!!errors.status}
          native={true}
          name="status"
          inputRef={register}
          label="select-module"
          margin="dense"
          size="small"
          variant="outlined"
        >
          <option value=""></option>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </Select>
        <FormHelperText style={{ color: "red" }}>
          {errors.status?.message}
        </FormHelperText>
      </FormControl>

      <Button
        type="submit"
        className="LoginButtonTech"
        variant="contained"
        color="primary"
      >
        Adicionar Tech
      </Button>
      <p style={{ color: "red" }}>{errors.registerError?.message}</p>
    </form>
  );
};

export default UserTechs;
