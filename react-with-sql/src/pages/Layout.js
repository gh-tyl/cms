import { Outlet, Link } from "react-router-dom"

function Layout() {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="form">Form</Link>
					</li>
					<li>
						<Link to="login">Login</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
		</>
	)
}

export default Layout;