export default function Customers({ customers }) {
	return (
		<>
			<h1>Customers</h1>
			{/* Customer list page, which has a table containing the list of all customers being registered using the home page along with a select button. Clicking the select button should choose that specific customer from the table for purchasing products. */}
			<table>
				<thead>
					<tr>
						<td>Full Name</td>
						<td>Phone</td>
						<td>Email</td>
						<td>Select</td>
					</tr>
				</thead>
				<tbody>
					{customers.map((customer) => (
						<tr key={customer.id}>
							<td>{customer.fullname}</td>
							<td>{customer.phone}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
}