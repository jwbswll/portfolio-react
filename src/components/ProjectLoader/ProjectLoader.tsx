import { useEffect, useState } from "react";
import { getProjects } from "../../services/firestore";
import ProjectCard from "../ProjectCard/ProjectCard";
import style from "./ProjectLoader.module.scss";
import React from "react";

const ProjectLoader = () => {
	console.log(React);
	const [projects, setProjects] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		if (loading) {
			const unsubscribe = getProjects(setProjects);
			setLoading(false);
			return () => unsubscribe();
		}
	}, []);
	return (
		<>
			{!loading && (
				<section className={style.list}>
					{projects.map((project, i) => {
						return <ProjectCard key={i} project={project} />;
					})}
				</section>
			)}
		</>
	);
};

export default ProjectLoader;
