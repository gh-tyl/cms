import FriendsCompo from "./FriendsCompo";

function App() {
  const peopleDetails = [
    {
      fname: "Maria",
      lname: "Clara",
      country: "Brazil",
      mark: "A"
    },
    {
      fname: "John",
      lname: "Doe",
      country: "USA",
      mark: "B"
    },
    {
      fname: "Jane",
      lname: "Doe",
      country: "USA",
      mark: "C"
    },
  ]
  return (
    <div className="App">
      <h1>Tyler Inari</h1>
      <FriendsCompo peopleDetails={peopleDetails} />
    </div>
  );
}

export default App;
