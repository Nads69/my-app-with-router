import { useState } from "react";

import "./App.css";

// page components

import Home from "./pages/Home";
import About from "./pages/About";

// the App

export default function App() {
  const [currentLocation, setCurrentLocation] = useState("/");

  return (
    <div>
      <nav>
        <button onClick={() => setCurrentLocation("/")} type="button">
          Home
        </button>
        <button onClick={() => setCurrentLocation("/about")} type="button">
          About
        </button>
      </nav>
      <main>
        {currentLocation === "/" && <Home />}
        {currentLocation === "/about" && <About />}
      </main>
    </div>
  );
}
