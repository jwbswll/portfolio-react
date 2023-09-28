import ProjectLoader from "../../components/ProjectLoader/ProjectLoader";
import style from "./Project.module.scss";
import React from "react";

const Projects = () => {
	console.log(React);
	return (
		<main className={style.main}>
			<h2 className={style.heading}>my past projects</h2>
			<ProjectLoader />
			<h1></h1>
		</main>
	);
};

export default Projects;
