import { Link, NavLink } from "react-router-dom";

const Home = () => {
	return (
		<>
			<main>
				<section>
					<h1>Jack</h1>
					<h1>Boswell</h1>
					<h3>Web Developer</h3>
				</section>
				<section>
					<Link to="https://www.linkedin.com/in/jack-boswell-971745279/">
						<i></i>
					</Link>
					<Link to="https://github.com/jwbswll">
						<i></i>
					</Link>
				</section>
				<section>
					<div>
						<img src="" alt="" />
					</div>
				</section>
				<section>
					<NavLink to="/about">About</NavLink>
					<NavLink to="/projects">Projects</NavLink>
					<NavLink to="/contact">Contact</NavLink>
				</section>
			</main>
		</>
	);
};

export default Home;
