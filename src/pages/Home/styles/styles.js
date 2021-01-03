import { makeStyles } from "@material-ui/core/styles";

import backImageDesktop from "./img/programer-working_opa.jpg";
import backImageMobile from "./img/it-specialist_opa.jpg";

const useStyles = makeStyles(() => ({
  card: {
    padding: "5% 10% 5% 10%",
    color: "white",
    backgroundImage: `url(${backImageMobile})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPositionY: "70%",
    height: "65vh",

    "@media (min-width: 768px)": {
      padding: "1% 10% 0% 10%",
      color: "white",
      backgroundImage: `url(${backImageDesktop})`,
    },
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

export default useStyles;
