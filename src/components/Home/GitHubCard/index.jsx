import Axios from "axios";
import React, { useEffect, useState } from "react";
import CardTemplate from "./CardTemplate";

const URL_BASE = `https://api.github.com/users/`;

const GitHubCards = () => {
  const [willianData, setwillianData] = useState([]);
  const [carlosData, setcarlosData] = useState([]);
  const [jefteData, setjefteData] = useState([]);
  const [felipeData, setfelipeData] = useState([]);
  const [marcosData, setmarcosData] = useState([]);

  const getUser = () => {
    Axios.get(URL_BASE + "Nailliw").then((body) => {
      setwillianData(body.data);
    });

    Axios.get(URL_BASE + "carlosbentz").then((body) => {
      setcarlosData(body.data);
    });

    Axios.get(URL_BASE + "jeftekeller").then((body) => {
      setjefteData(body.data);
    });
    Axios.get(URL_BASE + "felipe16sm").then((body) => {
      setfelipeData(body.data);
    });
    Axios.get(URL_BASE + "marcosmorato").then((body) => {
      setmarcosData(body.data);
    });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <CardTemplate
        jefteData={jefteData}
        willianData={willianData}
        carlosData={carlosData}
        felipeData={felipeData}
        marcosData={marcosData}
      />
    </>
  );
};

export default GitHubCards;
