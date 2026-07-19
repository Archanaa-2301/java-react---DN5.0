import React from "react";
import "./App.css";

import ListofPlayers from "./components/ListofPlayers";
import Scorebelow70 from "./components/Scorebelow70";
import OddPlayers from "./components/OddPlayers";
import EvenPlayers from "./components/EvenPlayers";
import ListofIndianPlayers from "./components/ListofIndianPlayers";

function App() {
  return (
    <div className="App">
      <h1>React ES6 Hands-On</h1>

      <hr />
      <ListofPlayers />

      <hr />
      <Scorebelow70 />

      <hr />
      <OddPlayers />

      <hr />
      <EvenPlayers />

      <hr />
      <ListofIndianPlayers />
    </div>
  );
}

export default App;