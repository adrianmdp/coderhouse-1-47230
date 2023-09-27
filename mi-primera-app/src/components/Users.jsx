import { useEffect } from "react";

const Users = ({ saludo, otroValor }) => {
  useEffect(() => {
    console.log("no tiene array de deps");
  });

  useEffect(() => {
    console.log("no tiene deps. Array vacío");
  }, []);

  useEffect(() => {
    // mount!!!

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => console.log(data));

    console.log("depende de que saludo cambie");
  }, [otroValor, saludo]);

  return <h1>Users</h1>;
};

export default Users;
