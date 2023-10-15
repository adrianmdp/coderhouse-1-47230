import Form from "../components/Form";

const data = [
  { componente: "input", type: "text", value: "", name: "username" },
  { componente: "input", type: "password", value: "", name: "password" },
  { componente: "input", type: "email", value: "", name: "description" },
];

// const login = [
//   { componente: "input", type: "text", value: "", name: "username" },
//   {
//     componente: "input",
//     type: "email",
//     value: "email@email.com",
//     name: "pass",
//   },
// ];

const Contact = () => {
  const sendForm = (event) => {
    event.preventDefault();
    console.log("Procesar login");
  };

  return (
    <div>
      <h1>Contact</h1>

      <Form onSubmit={sendForm} options={data} />
    </div>
  );
};

export default Contact;
