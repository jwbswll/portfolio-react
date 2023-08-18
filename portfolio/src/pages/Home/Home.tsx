import { Link, NavLink } from "react-router-dom";
import ProfileImage from "../../components/ProfileImage/ProfileImage";
import style from "./Home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
	return (
		<>
			<main className={style.main}>
				<section className={style.header}>
					<h1>Jack</h1>
					<h1>Boswell</h1>
					<h3>Web Developer</h3>
					<section className={style.socials}>
						<Link to="https://www.linkedin.com/in/jack-boswell-971745279/">
							<FontAwesomeIcon icon={faLinkedin} />
						</Link>
						<Link to="https://github.com/jwbswll">
							<FontAwesomeIcon icon={faGithub} />
						</Link>
					</section>
				</section>

				<section className={style.image_container}>
					<ProfileImage />
				</section>
				<section className={style.nav}>
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
			</main>
		</>
	);
};

export default Home;
