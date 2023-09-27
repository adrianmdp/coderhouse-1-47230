const Button = ({ children, id, name, type, value, className, onClick }) => {
  return (
    <button
      id={id}
      name={name}
      type={type}
      value={value}
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
