function FriendsCompo(props) {
	let num1 = 10;
	let num2 = 0;
	const peopleDetails = props.peopleDetails
	console.log(peopleDetails)
	return (
		<div>
			{/* <ol>
				<li>{num1 + num2}</li>
				<li>{num1 - num2}</li>
				<li>{num1 * num2}</li>
				<li>{(num2 === 0) ? "Devision by zero" : num1 / num2}</li>
			</ol> */}
			<table>
				<thead>
					<tr>
						{
							Object.keys(peopleDetails[0]).map((key, index) => (
								<th key={index}>{key}</th>
							))
						}
						{/* <th>First Name</th>
						<th>Last Name</th>
						<th>Country</th>
						<th>Mark</th> */}
					</tr>
				</thead>
				<tbody>
					{peopleDetails.map((peopleDetail, index) => (
						console.log(Object.keys(peopleDetail)),
						<tr key={index} >
							{
								Object.keys(peopleDetail).map((key, index) => (
									<td key={index}>{peopleDetail[key]}</td>
								))
							}
							{/* <td>{peopleDetail.fname}</td>
							<td>{peopleDetail.lname}</td>
							<td>{peopleDetail.country}</td>
							<td>{peopleDetail.mark}</td> */}
						</tr>
					))}
				</tbody>
			</table>
		</div >
	)
}

export default FriendsCompo;