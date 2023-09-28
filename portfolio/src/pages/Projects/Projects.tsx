import ProjectLoader from "../../components/ProjectLoader/ProjectLoader";
import style from "./Project.module.scss";

const Projects = () => {
	return (
		<main className={style.main}>
			<h2 className={style.heading}>my past projects</h2>
			<ProjectLoader />
			<h1></h1>
		</main>
	);
};

export default Projects;
