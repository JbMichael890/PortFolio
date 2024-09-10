import BeLang from "../components/Projects/BeLang";
import DoctorSite from "../components/Projects/DoctorSite";
import Dog from "../components/Projects/Dog";
import FabricStore from "../components/Projects/FabricStore";
import GlobalTeam from "../components/Projects/GlobalTeam";
import Movie from "../components/Projects/Movie";
import NBA from "../components/Projects/NBA";
import Technology from "../components/Projects/Technology";
import UserData from "../components/Projects/UserData";
import Weather from "../components/Projects/Weather";

const Projects = () => {
  return (
    <div>
      <Movie />
      <NBA />
      <BeLang />
      <DoctorSite />
      <FabricStore />
      <GlobalTeam />
      <UserData />
      <Weather />
      <Dog />
      <Technology />
    </div>
  );
};
export default Projects;
