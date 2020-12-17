import axios from "axios";

const RemoveTech = ({ id }) => {
  const handleRemoveTech = () => {
    let loggedUser = JSON.parse(window.localStorage.getItem("loggedUser"));
    let validation = loggedUser.headersToken;

    axios
      .delete(`https://kenziehub.me/users/techs/${id}`, validation)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <button
      onClick={() => {
        handleRemoveTech();
      }}
    >
      Remover Tech
    </button>
  );
};

export default RemoveTech;
