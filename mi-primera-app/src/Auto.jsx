// import "./styles.css";

const Optica = (props) => {
  const { lado, handleClick, className } = props;

  switch (lado) {
    case "derecha":
      return (
        <div className={className} onClick={() => handleClick(props.lado)}>
          Óptica derecha
        </div>
      );

    case "lateral":
      return (
        <div className={className} onClick={() => handleClick(props.lado)}>
          Óptica lateral
        </div>
      );

    default:
      return (
        <div className={className} onClick={() => handleClick(props.lado)}>
          Óptica izquierda
        </div>
      );
  }
};

const Auto = () => {
  // Codigo js sin límites

  const clickEnOptica = (lado) => {
    console.log("Click en optica " + lado);
  };

  return (
    <div className="auto">
      <Optica lado="derecha" handleClick={clickEnOptica} className="optica" />
      <Optica lado="izquierda" handleClick={clickEnOptica} />
      <Optica lado="lateral" handleClick={clickEnOptica} />
    </div>
  );
};

export default Auto;
