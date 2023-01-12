import { Outlet, Link } from "react-router-dom";

export default function Layout() {
	return (
		<div>
			<h1>Layout</h1>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="about">About</Link>
					</li>
					<li>
						<Link to="works">Works</Link>
					</li>
					<li>
						<Link to="experiences">Experiences</Link>
					</li>
					<li>
						<Link to="educations">Educations</Link>
					</li>
					<li>
						<Link to="contact">Contact</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
		</div>
	);
}