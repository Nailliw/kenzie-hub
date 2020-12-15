import { useStyles } from "./styles";
import { Box } from "@material-ui/core";

const UsersNavBar = () => {
	const classes = useStyles();

	return <Box className={classes.usersNavBar}>Botoes de Navegacao</Box>;
};

export default UsersNavBar;
