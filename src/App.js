import "./App.css";
import { CssBaseline, Typography, Container } from "@material-ui/core";

import NavBarMobile from "./components/NavBarMobile";
import NavBarDesktop from "./components/NavBarDesktop";

import Routes from "./Routes";

const App = () => {
	return (
		<>
			<CssBaseline />
			<Container maxWidth="xl" disableGutters>
				<Typography
					component="div"
					style={{
						backgroundColor: "#525261",
						height: "100vh",
					}}
				>
					{window.screen.width > 1024 ? <NavBarDesktop /> : <NavBarMobile />}
					<Routes />
				</Typography>
			</Container>
		</>
	);
};

export default App;
