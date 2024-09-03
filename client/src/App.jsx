import React from "react";
import "./App.css";
import NavBar from "./components/Navbar"; // Adjust the import path to where Navbar is located
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
