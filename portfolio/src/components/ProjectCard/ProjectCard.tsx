import { Project } from "../../services/Project.class";

const ProjectCard = (props: { project: Project }) => {
	const { title, imageLink, description, deployedLink, githubLink } =
		props.project;
	return (
		<div>
			<h4>{title}</h4>
			<img src={imageLink} alt={title} />
			<p>{description}</p>
			<a href={deployedLink}>
				<i>(rocket icon)</i>
			</a>
			<a href={githubLink}>
				<i>(code icon)</i>
			</a>
		</div>
	);
};

export default ProjectCard;
