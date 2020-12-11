import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Profile = () => {
  let isProfile = false;
  const [id, setId] = useState("8b8e50a6-50c2-4718-b817-2d38cad0c8f4");
  const params = useParams();
  const [token, setToken] = useState(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDc0ODc0NDMsImV4cCI6MTYwNzc0NjY0Mywic3ViIjoiOGI4ZTUwYTYtNTBjMi00NzE4LWI4MTctMmQzOGNhZDBjOGY0In0.6OxpLeeDiV8MD1ectkD87VHek7DsOGhHz4dlM52PN90"
  );
  const [data, setData] = useState();
  const headers = { Authorization: "Bearer " + token };

  useEffect(() => {
    if (isProfile) {
      axios
        .get(`https://kenziehub.me/profile`, {
          headers: { Authorization: "Bearer " + token },
        })
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => console.log(err));
      console.log("perfil");
    } else {
      axios
        .get(`https://kenziehub.me/users/${params.userID}`)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => console.log(err));
      console.log("nao perfil");
    }
  }, []);
  console.log(data);
  console.log(headers);

  return (
    <>
      {data && (
        <div style={{ display: "flex" }}>
          <div className="test">
            perfil
            <h1>{data.name}</h1>
            <h2>{data.bio}</h2>
            {data.avatar_url && (
              <img
                src={data.avatar_url}
                alt="avatar"
                style={{ width: "100px" }}
              />
            )}
            <p>contato {data.contact}</p>
            <p>email {data.email}</p>
          </div>
          <div className="test">
            hard skills
            {data.techs.map((tech, index) => (
              <div key={index}>
                <p>skill: {tech.title}</p>
                <p>nivel: {tech.status}</p>
              </div>
            ))}
          </div>
          <div className="test">
            projetos
            {data.works.map((work, index) => (
              <div key={index}>
                <h4>nome: {work.title}</h4>
                <p>descrição: {work.description}</p>

                <a href={work.deploy_url}>link</a>
              </div>
            ))}
          </div>
          <button>
            <Link to="/profile/edit">Editar Perfil</Link>
          </button>
        </div>
      )}
    </>
  );
};

export default Profile;
