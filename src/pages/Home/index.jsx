import {
  Card,
  Paper,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  media: {
    marginTop: 40,
    backgroundColor: "#21294B",
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
const Home = () => {
  const classes = useStyles();
  return (
    <Card className={classes.media}>
      <Paper square={true} elevation={3}>
        Conheça nossos desenvolvedores
        <Grid></Grid>
        <div className={classes.root}>
          <Grid container spacing={1}>
            <Grid container item xs={12} spacing={3}>
              HELLO
            </Grid>
            <Grid container item xs={12} spacing={3}>
              ASDASD
            </Grid>
            <Grid container item xs={12} spacing={3}>
              QWEQWE
            </Grid>
          </Grid>
        </div>
      </Paper>
    </Card>
  );
};

export default Home;
