import "./App.css";

function App() {
  const officeSpaces = [
    {
      name: "Sky Tower",
      rent: 55000,
      address: "Chennai",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600"
    },
    {
      name: "Tech Park",
      rent: 75000,
      address: "Bangalore",
      image: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=600"
    },
    {
      name: "Business Hub",
      rent: 90000,
      address: "Hyderabad",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600"
    }
  ];

  return (
    <div className="App">
      <h1>Office Space Rental App</h1>

      {officeSpaces.map((office, index) => (
        <div key={index} className="card">
          <img src={office.image} alt={office.name} />
          <h2>{office.name}</h2>

          <p>
            <strong>Rent:</strong>{" "}
            <span
              style={{
                color: office.rent < 60000 ? "red" : "green",
                fontWeight: "bold"
              }}
            >
              ₹{office.rent}
            </span>
          </p>

          <p>
            <strong>Address:</strong> {office.address}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;