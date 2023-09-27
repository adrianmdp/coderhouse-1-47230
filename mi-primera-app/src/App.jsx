import { useState } from "react";
import "./App.css";
import Auto from "./Auto";
import Button from "./components/Button";
import { Layout } from "./components/Layout";
import { FormLogin } from "./components/FormLogin";
import Users from "./components/Users";

function App() {
  const [saludo, setSaludo] = useState("");

  const handleClickSlaudar = () => {
    setSaludo("Hola mundo" + Math.random());
  };

  return (
    <Layout className="app" style={{ border: "2px solid #333" }}>
      <Button onClick={handleClickSlaudar}>Saludar</Button>
      <strong>{saludo}</strong>
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
        <Button id="form-login" type="submit">
          <i className="fas fa-sign-in-alt"></i>
          Iniciar sesión
        </Button>

        <hr />
        <FormLogin />

        <hr />

        <Users saludo={saludo} otroValor="Lorem Ipsum" />
      </main>
    </Layout>
  );
}

export default App;
