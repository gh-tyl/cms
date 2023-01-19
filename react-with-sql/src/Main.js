import { ReactDOM } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Form from "./pages/Form";
import Login from "./pages/Login";
import Nopage from "./pages/Nopage";

function Main() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />} >
					<Route index element={<Home />} />
					<Route path="form" element={<Form />} />
					<Route path="login" element={<Login />} />
					<Route path="*" element={<Nopage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
};

export default Main;