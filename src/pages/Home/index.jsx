import {
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import GitHubCard from "../../components/Home/GitHubCard";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import backimage from "./img/programer-working_opa.jpg";
import backimage2 from "./img/it-specialist.jpg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  card: {
    padding: "5% 10% 5% 10%",
    color: "white",
    backgroundImage: `url(${backimage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPositionY: "70%",
    height: "65vh",
  },
  mobilecard: {
    padding: "1% 10% 0% 10%",
    color: "white",
    backgroundImage: `url(${backimage2})`,
    backgroundSize: "150%",
  },
  grid: {
    minHeight: "15vh",
    maxHeight: "25vh",
    marginTop: "2%",
    width: "30vw",
  },
  title: {
    fontSize: "10px",
  },
}));
const Home = () => {
  const classes = useStyles();
  const history = useHistory();
  const matches = useMediaQuery("(min-width:768px)");
  return (
    <div>
      <Card className={matches ? classes.card : classes.mobilecard}>
        <CardHeader title="KENZIE HUB " />
        <CardContent>
          <Typography>
            Este é o KenzieHub - Um hub de portfólios de programadores da
            Kenzie!
          </Typography>

          <CardActions>
            <Button
              onClick={() => history.push("/users")}
              variant="contained"
              size="large"
            >
              Nossos Devs
            </Button>
          </CardActions>
          <div>
            <strong>“Sempre passar o que você aprendeu. - Mestre Yoda”</strong>
          </div>
        </CardContent>
      </Card>

      <GitHubCard />
    </div>
  );
};

export default Home;
