import { useStyles } from "./styles";
import { Box, Button } from "@material-ui/core";

import { useSelector, useDispatch } from "react-redux";
import { setUsersFiltersThunk } from "../../../store/modules/usersFilters/thunk";

const UsersNavBar = () => {
	const classes = useStyles();

	const dispatch = useDispatch();
	const usersFilters = useSelector(
		({ UsersFiltersReducer }) => UsersFiltersReducer
	);
	const { page } = usersFilters;

	const handleGoBackPage = () => {
		const newPage = page - 1;
		if (newPage > 0) {
			const newFilters = { ...usersFilters, page: newPage };
			dispatch(setUsersFiltersThunk(newFilters));
		}
	};
	const handleGoNextPage = () => {
		const newPage = page + 1;
		if (newPage > 0) {
			const newFilters = { ...usersFilters, page: newPage };
			dispatch(setUsersFiltersThunk(newFilters));
		}
	};

	return (
		<Box className={classes.usersNavBar}>
			<Button
				size="small"
				variant="contained"
				color="primary"
				onClick={handleGoBackPage}
			>
				Anterior
			</Button>
			<Box component="span">{page}</Box>
			<Button
				size="small"
				variant="contained"
				color="primary"
				onClick={handleGoNextPage}
			>
				Próxima
			</Button>
		</Box>
	);
};

export default UsersNavBar;
