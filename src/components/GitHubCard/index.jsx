import Axios from "axios";
import React, { useEffect, useState } from "react";
import CardTemplate from "./CardTemplate";

const URL_BASE = `https://api.github.com/users/`;

const GitHubCards = () => {
  const [willianData, setwillianData] = useState([]);
  const [carlosData, setcarlosData] = useState([]);
  const [jefteData, setjefteData] = useState([]);

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
      />
    </>
  );
};

export default GitHubCards;
