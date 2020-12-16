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
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
const useStyles = makeStyles(() => ({
  root: {
    width: 160,
    height: 150,
    margin: 10,
  },
}));
const UserCard = ({ list }) => {
  const classes = useStyles();
  return (
    <div>
      <Card id="specialsffects" className={classes.root}>
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
    </div>
  );
};

export default UserCard;
