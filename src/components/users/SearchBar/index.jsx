import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setUsersFiltersThunk } from "../../../store/modules/usersFilters/thunk";

import { useStyles } from "./styles";
import { Box, Grid, TextField, Button } from "@material-ui/core";

const SearchBar = () => {
	const [searchParam, setSearchParam] = useState("");

	const dispatch = useDispatch();
	const usersFilters = useSelector(
		({ UsersFiltersReducer }) => UsersFiltersReducer
	);

	const handleSearch = () => {
		const newFilters = { ...usersFilters, tech: searchParam };
		dispatch(setUsersFiltersThunk(newFilters));
		setSearchParam("");
	};

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
						value={searchParam}
						onChange={(e) => setSearchParam(e.target.value)}
						onKeyDown={(e) => {
							if (e.key === "Enter") return handleSearch();
						}}
					/>
				</Grid>
				<Grid item>
					<Button
						onClick={handleSearch}
						variant="contained"
						size="small"
						color="primary"
					>
						Pesquisar
					</Button>
				</Grid>
			</Grid>
		</Box>
	);
};
export default SearchBar;
