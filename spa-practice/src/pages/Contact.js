export default function Contact({ setMsg, msg }) {
	return (
		<>
			<h1>Contact</h1>
			<input value={msg} onChange={(e) => setMsg(e.target.value)} />
		</>
	);
}