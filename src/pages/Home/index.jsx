import { useHistory } from "react-router-dom";

import {
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";

import useStyles from "./styles/styles";
import GitHubCard from "../../components/Home/GitHubCard";

const Home = () => {
  const classes = useStyles();

  const history = useHistory();

  return (
    <div>
      <Card className={classes.card}>
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
