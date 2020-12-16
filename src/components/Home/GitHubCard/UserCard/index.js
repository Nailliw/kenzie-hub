import React from "react";
import "./styles.css";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Card,
  CardHeader,
  CardActions,
  IconButton,
  Link,
  Grid,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
const useStyles = makeStyles(() => ({
  card: {
    width: "15vw",
    margin: 10,
  },
  root: {},
}));
const UserCard = ({ list }) => {
  const classes = useStyles();
  return (
    <Grid item>
      <Card id="specialsffects" className={classes.card}>
        <CardHeader
          avatar={<Avatar src={list.avatar_url}></Avatar>}
          title={list.name}
        />
        <CardActions>
          <IconButton aria-label="Repositório GitHub">
            <Link href={list.html_url}>
              <GitHubIcon />
            </Link>
          </IconButton>
          <IconButton aria-label="LinkedIn">
            <Link href={list.blog}>
              <LinkedInIcon />
            </Link>
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default UserCard;
