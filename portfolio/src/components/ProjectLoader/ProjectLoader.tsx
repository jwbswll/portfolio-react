import { projects } from "../../services/data";
import ProjectCard from "../ProjectCard/ProjectCard";
import style from "./ProjectLoader.module.scss";

const ProjectLoader = () => {
	return (
		<section className={style.list}>
			{projects.map((project, i) => {
				return <ProjectCard key={i} project={project} />;
			})}
		</section>
	);
};

export default ProjectLoader;
