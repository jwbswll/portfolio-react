import { projects } from "../../services/data";
import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectLoader = () => {
	return (
		<>
			{projects.map((project, i) => {
				return <ProjectCard key={i} project={project} />;
			})}
		</>
	);
};

export default ProjectLoader;
