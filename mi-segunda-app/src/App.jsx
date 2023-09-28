function App() {
  const traerCafe = new Promise((resolve, reject) => {
    // Hicimos una operación y tuvimos éxito o no
    const success = true;

    setTimeout(() => {
      if (success) {
        resolve({ name: "Adrian", email: "adrian@coder.com" });
      } else {
        reject("No hay café");
      }
    }, 5000);
  });

  traerCafe
    .then((response) => {
      console.log("then", response);
    })
    .catch((err) => {
      console.log("catch", err);
    });

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

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });

  return <div>Hola mundo</div>;
}

export default App;
