import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import style from "./Contact.module.scss";
import React from "react";

const Contact = () => {
	console.log(React);
	return (
		<main className={style.main}>
			<div className={style.content}>
				<h2 className={style.page_heading}>work with me</h2>
				<p className={style.p}>Feel free to contact me at:</p>
				<div className={style.icons}>
					<Link to="https://www.linkedin.com/in/jack-boswell-971745279/">
						<FontAwesomeIcon className={style.icon} icon={faLinkedin} />
					</Link>
					<Link to="https://github.com/jwbswll">
						<FontAwesomeIcon className={style.icon} icon={faGithub} />
					</Link>
				</div>
			</div>
		</main>
	);
};

export default Contact;
