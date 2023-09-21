const makebutton = (txt, id, type, value, name, className) => {
  const button = document.createElement("button");
  const text = document.createTextNode(txt);
  button.classList.add(className.join(" "));
  button.setAttribute("id", id);
  button.setAttribute("type", type);
  button.setAttribute("value", value);
  button.setAttribute("name", name);
  button.appendChild(text);
  document.body.appendChild(button);
};

makebutton("Iniciar sesión", "btn", "button", "Enviar", "btn");
makebutton("Iniciar sesión", "btn", "button", "Enviar", "btn");
makebutton("Iniciar sesión", "btn", "button", "Enviar", "btn");
makebutton("Iniciar sesión", "btn", "button", "Enviar", "btn");
makebutton("Iniciar sesión", "btn", "button", "Enviar", "btn");
makebutton("Iniciar sesión", "btn", "button", "Enviar", "btn");
makebutton("Iniciar sesión", "btn", "button", "Enviar", "btn");
makebutton("Iniciar sesión", "btn", "button", "Enviar", "btn");
makebutton("Iniciar sesión", "btn", "button", "Enviar", "btn");
makebutton("Iniciar sesión", "btn", "button", "Enviar", "btn");
