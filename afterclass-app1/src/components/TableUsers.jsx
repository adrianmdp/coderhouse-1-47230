import User from "./User";

const TableUsers = ({ items }) => {
  const renderItems = () => {
    const rta = [];

    for (let i = 0; i < items.length; i++) {
      rta.push(
        <User
          key={items[i].name}
          thumbnail={items[i].thumbnail}
          name={items[i].name}
          age={items[0].age}
          weight={items[0].weight}
          onDelete={(name) => {
            console.log(name);
          }}
        />
      );
    }
    return rta;
  };

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Imagen</th>
          <th>Nombre</th>
          <th>Edad</th>
          <th>Peso</th>
        </tr>
      </thead>
      <tbody>{renderItems()}</tbody>
    </table>
  );
};

export default TableUsers;
