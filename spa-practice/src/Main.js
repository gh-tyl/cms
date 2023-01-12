import { ReactDOM } from "react-dom/client";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import Experiences from "./pages/Experiences";
import Educations from "./pages/Customer";
import Contact from "./pages/Contact";
import Nopage from "./pages/Nopage";


function Main() {

	const [msg, setMsg] = useState("Hello World!")
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />} >
					<Route path="/" element={<Home />} />
					<Route path="about" element={<About msg={msg} />} />
					<Route path="works" element={<Works />} />
					<Route path="experiences" element={<Experiences />} />
					<Route path="educations" element={<Educations />} />
					<Route path="contact" element={<Contact msg={msg} setMsg={setMsg} />} />
					<Route path="*" element={<Nopage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
};

export default Main;