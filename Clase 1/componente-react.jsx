const Button = (props) => {
  const { txt, id, type, value, name, onClick, className } = props;

  return (
    // JSX
    <button
      id={id}
      type={type}
      value={value}
      name={name}
      onClick={onClick}
      className={className}
    >
      {txt}
    </button>
  );
};

const Contact = () => {
  return (
    <form action="">
      <Button
        txt="Enviar"
        id="btn-contact"
        type="submit"
        value="contact"
        name="contact"
        onClick={handleClick}
        className="btn btn-contact"
      />

      <Button
        txt="Enviar"
        id="btn-contact"
        type="submit"
        value="contact"
        name="contact"
        onClick={handleClick}
        className="btn btn-contact"
      />

      <Button
        txt="Enviar"
        id="btn-contact"
        type="submit"
        value="contact"
        name="contact"
        onClick={handleClick}
        className="btn btn-contact"
      />
    </form>
  );
};
