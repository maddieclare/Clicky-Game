import React from "react";
import Header from "./components/Header/Header.js";
import Gallery from "./components/Gallery/Gallery.js";
import "./App.css";

function App() {
  return (
    <div className="main">
      <header className="header">
        <Header />
      </header>
      <div className="gameContainer">
        <Gallery />
      </div>
    </div>
  );
}

export default App;
