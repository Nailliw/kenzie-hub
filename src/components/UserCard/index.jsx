import "./styles.css";
import { useHistory } from "react-router-dom";

const UserCard = ({ user }) => {
	const history = useHistory();

	const { id, name, avatar_url, techs, works } = user;

	return (
		<div className="userCard" onClick={() => history.push(`/users/${id}`)}>
			<div className="userAvatar">
				<img
					alt="Foto de Perfil"
					src={
						avatar_url
							? avatar_url
							: "https://live.staticflickr.com/65535/50703410456_55128821b6_z.jpg"
					}
				/>
			</div>
			<div className="userInfo">
				<p>
					Nome: {name}, Tecnologias: {techs.length}, Trabalhos: {works.length}
				</p>
			</div>
		</div>
	);
};

export default UserCard;
