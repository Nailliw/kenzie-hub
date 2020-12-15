import { useStyles } from "./styles";

import { Box, Grid, TextField, Button } from "@material-ui/core";

const SearchBar = () => {
	const classes = useStyles();

	return (
		<Box className={classes.searchBarBox}>
			<Grid
				className={classes.searchBar}
				container
				justify="center"
				alignItems="center"
				spacing={2}
			>
				<Grid item>
					<TextField
						type="text"
						variant="outlined"
						size="small"
						margin="dense"
						label="Pesquisar por Tech"
					/>
				</Grid>
				<Grid item>
					<Button variant="contained" size="small" color="primary">
						Pesquisar
					</Button>
				</Grid>
			</Grid>
		</Box>
	);
};
export default SearchBar;
