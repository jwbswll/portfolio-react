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
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import typescript from "../../icons8-typescript-50.png";
import nest from "../../nestjs.svg";
import spring from "../../icons8-spring-boot-48.png";

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
					<a
						className={style.whitecliffe}
						href="https://www.whitecliffe.ac.nz/"
					>
						Whitecliffe
					</a>{" "}
					in Auckland.
				</p>
			</div>
			<h4 className={style.known_tech__heading}>
				technologies i've worked with
			</h4>
			<div className={style.known_tech}>
				<div className={style.known_tech__container}>
					<p className={style.label}>HTML</p>
					<FontAwesomeIcon className={style.icon} icon={faHtml5} />
				</div>
				<div className={style.known_tech__container}>
					<p className={style.label}>CSS</p>
					<FontAwesomeIcon className={style.icon} icon={faCss3} />
				</div>
				<div className={style.known_tech__container}>
					<p className={style.label}>SCSS</p>
					<FontAwesomeIcon className={style.icon} icon={faSass} />
				</div>
				<div className={style.known_tech__container}>
					<p className={style.label}>JavaScript</p>
					<FontAwesomeIcon className={style.icon} icon={faJs} />
				</div>
				<div className={style.known_tech__container}>
					<p className={style.label}>TypeScript</p>
					<img className={style.logo_img} src={typescript} alt="typescript" />
				</div>
				<div className={style.known_tech__container}>
					<p className={style.label}>Java</p>
					<FontAwesomeIcon className={style.icon} icon={faJava} />
				</div>
				<div className={style.known_tech__container}>
					<p className={style.label}>React</p>
					<FontAwesomeIcon className={style.icon} icon={faReact} />
				</div>
				<div className={style.known_tech__container}>
					<p className={style.label}>Spring</p>
					<img className={style.logo_img} src={spring} alt="spring boot" />
				</div>
				<div className={style.known_tech__container}>
					<p className={style.label}>SQL</p>
					<FontAwesomeIcon className={style.icon} icon={faDatabase} />
				</div>
				<div className={style.known_tech__container}>
					<p className={style.label}>NestJS</p>
					<img className={style.logo_img} src={nest} alt="nest JS" />
				</div>
			</div>
		</main>
	);
};

export default About;
