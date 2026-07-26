import "./App.css";

function App() {
  const isLoggedIn = true;

  const guestPage = (
    <div>
      <h2>Please Sign Up</h2>
      <button>Login</button>
    </div>
  );

  const userPage = (
    <div>
      <h2>Welcome to Ticket Booking App</h2>
      <button>Book Ticket</button>
    </div>
  );

  return (
    <div className="App">
      <h1>Ticket Booking App</h1>

      {isLoggedIn ? userPage : guestPage}
    </div>
  );
}

export default App;