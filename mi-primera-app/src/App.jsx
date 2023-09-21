import { useState } from "react";
import "./App.css";
import Auto from "./Auto";
import Button from "./components/Button";

function App() {
  return (
    <div className="app" data-testid="" style={{ border: "2px solid #333" }}>
      <header></header>
      <nav>
        <ul>
          <li>
            <a href="" className="list-item">
              Home
            </a>
          </li>
          <li>
            <a href="" className="list-item">
              Services
            </a>
          </li>
          <li>
            <a href="" className="list-item">
              Login
            </a>
          </li>
          <li>
            <a href="" className="list-item">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <main>
        <Auto />
        <hr />
        <Button />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
