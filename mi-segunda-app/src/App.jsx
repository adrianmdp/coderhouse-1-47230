import { useState } from "react";
import { getProducts } from "./services/products";
import { products } from "./mock/products";
import { useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

function App() {
  // const traerCafe = new Promise((resolve, reject) => {
  // // Hicimos una operación y tuvimos éxito o no
  //   const success = true;

  //   setTimeout(() => {
  //     if (success) {
  //       resolve({ name: "Adrian", email: "adrian@coder.com" });
  //     } else {
  //       reject("No hay café");
  //     }
  //   }, 5000);
  // });

  // traerCafe
  //   .then((response) => {
  //     console.log("then", response);
  //   })
  //   .catch((err) => {
  //     console.log("catch", err);
  //   });

  // const funcion1 = (callback) => {
  //   callback("Hola mundo", 12345);
  // };

  // funcion1((saludo, number) => {
  //   console.log(saludo, "En funcion 2");
  //   console.log(number, "En funcion 2");
  // });

  // const getUsers = async () => {
  //   const response = await fetch("https://jsonplaceholder.typicode.com/users");
  //   console.log(response);
  //   return response;
  // };

  // getUsers();
  // getUsers().then((response) => {
  //   console.log(response);
  // });

  // fetch("https://jsonplaceholder.typicode.com/users")
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((data) => {
  //     console.log(data);
  //   });

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((response) => {
      console.log("getProducts");
      setProducts(response);
    });
  }, []);

  console.log(products);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");

  const createUser = (event) => {
    event.preventDefault();
    fetch("https://miapi.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        authentication:
          "Bearer jñsaddslifjg892wq7g89df987g0ds8fyg07sd88f6g8vdshunvuj",
      },
      body: JSON.stringify({ name, email, country }),
    })
      .then((response) => response.json)
      .then((data) => console.log("Se creó el user"))
      .catch((err) => setMessage("No se pudo crear el usuario"));
  };

  return (
    <>
      <h1>Products</h1>

      <form onSubmit={createUser}>
        <div>
          <label htmlFor="">Nombre</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Aperllido</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Country</label>
          <input
            type="text"
            name="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <button type="submit">Enviar</button>
        {message}
      </form>

      {products.map((product) => {
        return (
          <div key={product.name + "_productsList"}>
            <img src={product.image} alt={product.name} />
            <ul>
              <li>Name: {product.name}</li>
              <li>Price: {product.price}</li>
              <li>Description: {product.description}</li>
            </ul>
          </div>
        );
      })}
      <Login />
    </>
  );
}

export default App;
