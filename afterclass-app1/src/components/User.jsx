import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const User = ({
  id,
  thumbnail,
  name,
  age,
  weight,
  onDelete,
  onQuickViewClicked,
}) => {
  const navigate = useNavigate();

  return (
    <tr>
      <td>
        <img src={thumbnail} alt="imagen" height={50} />
      </td>
      <td>{name}</td>
      <td>{age}</td>
      <td>{weight}</td>
      <td>
        <Button onClick={() => onDelete(name)}>Eliminar</Button>{" "}
        <Link to={`/users/${id}`}>Ver detalle</Link>{" "}
        <Button onClick={onQuickViewClicked}>Vista rapida</Button>
      </td>
    </tr>
  );
};

export default User;
