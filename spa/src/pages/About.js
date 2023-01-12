function About({ msg }) {
	console.log(msg);
	return (
		<>
			<h1>About</h1>
			{/* <p>This is the about page.</p> */}
			<h1>{msg}</h1>
		</>
	)
}

export default About;