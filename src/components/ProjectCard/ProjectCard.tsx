import { faCode, faRocket } from "@fortawesome/free-solid-svg-icons";
import { Project } from "../../services/Project.class";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./ProjectCard.module.scss";

const ProjectCard = (props: { project: Project }) => {
	const { title, imageLink, description, deployedLink, githubLink } =
		props.project;
	return (
		<div className={style.card}>
			<h4 className={style.title}>{title}</h4>
			<img className={style.img} src={imageLink} alt={title} />
			<p className={style.desc}>{description}</p>
			<div className={style.icons}>
				{deployedLink && (
					<a className={style.icon} href={deployedLink}>
						<FontAwesomeIcon icon={faRocket} />
					</a>
				)}
				<a className={style.icon} href={githubLink}>
					<FontAwesomeIcon icon={faCode} />
				</a>
			</div>
		</div>
	);
};

export default ProjectCard;
