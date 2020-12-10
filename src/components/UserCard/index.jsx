import { useHistory } from "react-router-dom";

const UserCard = ({ user }) => {
	const history = useHistory();

	const { id, name, avatar_url, techs, works } = user;

	return (
		<div data-user-id={id} onClick={(e) => history.push(`/users/${id}`)}>
			<img alt="Foto de Perfil" src={avatar_url} /> {name}, Tecnologias:
			{techs?.length}, Trabalhos:{works?.lenght}
		</div>
	);
};

export default UserCard;
