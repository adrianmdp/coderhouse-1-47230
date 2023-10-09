const Button = ({ children, type, className, id, value, onClick }) => {
  return (
    <button
      type={type}
      className={className}
      id={id}
      value={value}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
