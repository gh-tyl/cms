export default function Home() {
	return (
		<div>
			<h1>Home</h1>
			{/* Home page have a registration form which is able to get a customers information including (full name, phone, email) */}
			<form>
				<label htmlFor="fullname">Full Name</label>
				<input type="text" id="fullname" name="fullname" />
				<label htmlFor="phone">Phone</label>
				<input type="text" id="phone" name="phone" />
				<label htmlFor="email">Email</label>
				<input type="text" id="email" name="email" />
				<button type="submit">Submit</button>
			</form>
		</div>
	)
}