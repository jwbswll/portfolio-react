import { NavLink } from "react-router-dom";
import style from "./Nav.module.scss";
import React from "react";

const Nav = () => {
	console.log(React);
	return (
		<section className={style.nav}>
			<NavLink className={style.link} to="/">
				HOME
			</NavLink>
			<NavLink className={style.link} to="/about">
				ABOUT
			</NavLink>
			<NavLink className={style.link} to="/projects">
				PROJECTS
			</NavLink>
			<NavLink className={style.link} to="/contact">
				CONTACT
			</NavLink>
		</section>
	);
};

export default Nav;
