import { ReactDOM } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";
import Nopage from "./pages/Nopage";

function Main() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />} >
					<Route index element={<Home />} />
					<Route path="about" element={<About msg={"sample"} />} />
					<Route path="register" element={<Register />} />
					<Route path="*" element={<Nopage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
};

export default Main;