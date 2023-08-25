import ProjectLoader from "../../components/ProjectLoader/ProjectLoader";
import style from "./Project.module.scss";

const Projects = () => {
	return (
		<main>
			<h2 className={style.heading}>my past projects</h2>
			<ProjectLoader />
		</main>
	);
};

export default Projects;
