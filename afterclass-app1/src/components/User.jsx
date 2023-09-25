const User = ({ thumbnail, name, age, weight, onDelete }) => {
  return (
    <tr>
      <td>
        <img src={thumbnail} alt="imagen" height={50} />
      </td>
      <td>{name}</td>
      <td>{age}</td>
      <td>{weight}</td>
      <td>
        <button onClick={() => onDelete(name)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default User;
