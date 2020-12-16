import GitHubCard from "../../components/GitHubCard";
const Home = () => {
  return (
    <div>
      <h1>Kenzie Hub - API</h1>
      <div>
        Este é o backend da aplicação KenzieHub - Um hub de portfólios de
        programadores daqui da Kenzie! O objetivo dessa aplicação é conseguir
        criar um frontend de qualidade em grupo, utilizando o que foi ensinado
        até então no curso (Q2) - E desenvolver hard skills e soft skills.
      </div>
      <div>“Sempre passar o que você aprendeu. - Mestre Yoda”</div>
      <GitHubCard />
    </div>
  );
};

export default Home;
