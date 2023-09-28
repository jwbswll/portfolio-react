import { Link } from "react-router-dom";
import ProfileImage from "../../components/ProfileImage/ProfileImage";
import style from "./Home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
	return (
		<>
			<main className={style.main}>
				<div className={style.header}>
					<h1>Jack</h1>
					<h1>Boswell</h1>
					<h3>Web Developer</h3>
				</div>

				<section className={style.image_container}>
					<ProfileImage />
				</section>

				<section className={style.socials}>
					<Link className={style.gh} to="https://github.com/jwbswll">
						<FontAwesomeIcon icon={faGithub} />
					</Link>
					<Link
						className={style.li}
						to="https://www.linkedin.com/in/jack-boswell-971745279/"
					>
						<FontAwesomeIcon icon={faLinkedin} />
					</Link>
				</section>
			</main>
		</>
	);
};

export default Home;
