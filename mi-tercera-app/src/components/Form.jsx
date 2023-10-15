const Form = ({ onSubmit, options }) => {
  return (
    <form onSubmit={onSubmit}>
      {options.map((control) => (
        <input type={control.type} value={control.value} />
      ))}

      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;
