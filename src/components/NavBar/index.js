import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUserThunk } from "../../store/modules/loggedUser/thunk";

import {
	Button,
	Menu,
	MenuItem,
	Fade,
	AppBar,
	Box,
	Avatar,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import useStyles from "./makestyles";

const NavBar = () => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const history = useHistory();
	const dispatch = useDispatch();

	const { user, token } = useSelector(
		({ LoggedUserReducer }) => LoggedUserReducer
	);
	const [toggleLogout, setToggleLogout] = useState(false);

	const getDisplayName = (name) => {
		const splitedName = name.split(" ");
		const displayName = splitedName[0];
		return displayName;
	};

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handlelogout = () => {
		setToggleLogout(!toggleLogout);
		dispatch(logoutUserThunk());
	};

	const classes = useStyles();

	return !token ? (
		<AppBar className={classes.appbar} position="relative">
			<Box className={classes.barra01}>
				<Box>
					<Button
						className={classes.btn_home}
						onClick={() => history.push("/")}
					/>
				</Box>
			</Box>

			<Box className={classes.barra02}>
				<Box>
					<IconButton
						aria-controls="fade-menu"
						aria-haspopup="true"
						onClick={handleClick}
						edge="start"
						className={classes.menuButton}
						color="primary"
						aria-label="menu"
					>
						<MenuIcon color="primary" />
					</IconButton>
					<Menu
						id="fade-menu"
						anchorEl={anchorEl}
						keepMounted
						open={open}
						onClose={handleClose}
						TransitionComponent={Fade}
					>
						<MenuItem className={classes.menu_item} onClick={handleClose}>
							<Button
								className={classes.btn_menu}
								onClick={() => history.push("/login")}
							>
								Entrar
							</Button>
						</MenuItem>
						<MenuItem className={classes.menu_item} onClick={handleClose}>
							<Button
								className={classes.btn_menu}
								onClick={() => history.push("/users")}
							>
								Devs
							</Button>
						</MenuItem>
						<MenuItem className={classes.menu_item} onClick={handleClose}>
							<Button
								className={classes.btn_menu}
								onClick={() => history.push("/register")}
							>
								Cadastrar
							</Button>
						</MenuItem>
					</Menu>
				</Box>
			</Box>
		</AppBar>
	) : (
		<AppBar className={classes.appbar} position="static">
			<Box className={classes.barra03}>
				<Box>
					<Button
						className={classes.btn_home}
						onClick={() => history.push("/")}
					></Button>
				</Box>
			</Box>

			<Box className={classes.barra05}>
				<Box style={{ marginRight: "50px" }}>
					<Button onClick={() => history.push("/users")} size="large">
						Devs
					</Button>
				</Box>
				<Box style={{ color: "#000", marginRight: "10px" }}>
					Seja bem-vindo, {getDisplayName(user?.name)}
				</Box>
				<Box>
					<IconButton
						color="primary"
						className={classes.menuButton}
						edge="start"
						aria-label="menu"
					>
						<Button
							size="large"
							className={classes.btnlogged}
							aria-controls="fade-menu"
							aria-haspopup="true"
							onClick={handleClick}
						>
							<Avatar src={user?.avatar_url} />
						</Button>
					</IconButton>
					<Menu
						id="fade-menu"
						anchorEl={anchorEl}
						keepMounted
						open={open}
						onClose={handleClose}
						TransitionComponent={Fade}
					>
						<MenuItem className={classes.menu_item} onClick={handleClose}>
							<Button
								className={classes.btn_menu}
								onClick={() => history.push(`/users/profile`)}
							>
								Perfil
							</Button>
						</MenuItem>
						<MenuItem className={classes.menu_item} onClick={handleClose}>
							<Button
								className={classes.btn_menu}
								onClick={() => history.push(`/users/profile/edit`)}
							>
								Editar Perfil
							</Button>
						</MenuItem>
						<MenuItem className={classes.menu_item} onClick={handleClose}>
							<Button className={classes.btn_menu} onClick={handlelogout}>
								Sair
							</Button>
						</MenuItem>
					</Menu>
				</Box>
			</Box>
		</AppBar>
	);
};
export default NavBar;
