import style from "./About.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHtml5,
	faCss3,
	faSass,
	faJs,
	faJava,
	faReact,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
	return (
		<main className={style.main}>
			<h2 className={style.page_heading}>a little about me</h2>
			<div className={style.about_content}>
				<p>Kia Ora! I'm Jack.</p>
				<p className={style.about_content_para}>
					Originally from Aotearoa New Zealand and currently based in Melbourne.
				</p>
				<p>
					After a ten year stint in the hospitality industry, I'm ready to
					transfer my customer first approach and people skills to a career in
					web development.
				</p>
				<p>
					I also come packed with the design skills I gained from a Certificate
					IV in Digital Media & Design at{" "}
					<a href="https://www.whitecliffe.ac.nz/">Whitecliffe</a> in Auckland.
				</p>
			</div>
			<h4 className={style.known_tech__heading}>
				technologies i've worked with
			</h4>
			<div className={style.known_tech}>
				<div>
					<p>HTML</p>
					<FontAwesomeIcon icon={faHtml5} />
				</div>
				<div>
					<p>CSS</p>
					<FontAwesomeIcon icon={faCss3} />
				</div>
				<div>
					<p>SCSS</p>
					<FontAwesomeIcon icon={faSass} />
				</div>
				<div>
					<p>JavaScript</p>
					<FontAwesomeIcon icon={faJs} />
				</div>
				<div>
					<p>TypeScript</p>
					<i></i>
				</div>
				<div>
					<p>Java</p>
					<FontAwesomeIcon icon={faJava} />
				</div>
				<div>
					<p>React</p>
					<FontAwesomeIcon icon={faReact} />
				</div>
				<div>
					<p>Spring</p>
					<i></i>
				</div>
				<div>
					<p>SQL</p>
					<i></i>
				</div>
				<div>
					<p>NestJS</p>
					<i></i>
				</div>
			</div>
		</main>
	);
};

export default About;
