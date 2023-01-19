import jsonSrv from "../services/jsonSrv";

function Form() {
	function handleSubmit(e) {
		e.preventDefault();
		// let data = new FormData(e.target);
		// data["fname"] = e.target["fname"].value;
		// data["lname"] = e.target["lname"].value;
		// data["email"] = e.target["email"].value;
		// data["password"] = e.target["password"].value;
		// data["role"] = e.target["role"].value;
		// dummy data
		let data = new FormData();
		data = {
			"fname": "John",
			"lname": "Doe",
			"email": "john@doe.com",
			"password": "123456",
			"role": "admin"
		}
		jsonSrv.post("/", data).then((res) => {
			console.log(res);
		}).catch((err) => {
			console.log(err);
		});
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label htmlFor="fname">First Name</label>
				<input type="text" id="fname" name="fname" />
				<label htmlFor="lname">Last Name</label>
				<input type="text" id="lname" name="lname" />
				<label htmlFor="email">Email</label>
				<input type="email" id="email" name="email" />
				<label htmlFor="password">Password</label>
				<input type="password" id="password" name="password" />
				<label htmlFor="role">Role</label>
				<select id="role" name="role">
					<option value="admin">Admin</option>
					<option value="user">User</option>
				</select>
				<button type="submit">Submit</button>
			</form>
		</>
	)
}

export default Form;