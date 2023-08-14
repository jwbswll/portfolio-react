import { Link } from "react-router-dom";

const Contact = () => {
	return (
		<main>
			<div>
				<h2>work with me</h2>
				<p>Feel free to contact me at:</p>
				<div>
					<Link to="https://www.linkedin.com/in/jack-boswell-971745279/">
						<i></i>
					</Link>
					<Link to="https://github.com/jwbswll">
						<i></i>
					</Link>
				</div>
			</div>
		</main>
	);
};

export default Contact;
