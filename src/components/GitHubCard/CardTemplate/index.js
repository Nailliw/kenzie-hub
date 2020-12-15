import React from "react";
import UserCard from "../UserCard";

const CardTemplate = ({ willianData, carlosData, jefteData }) => {
  return (
    <>
      <UserCard list={willianData} />
      <UserCard list={carlosData} />
      <UserCard list={jefteData} />
    </>
  );
};

export default CardTemplate;
