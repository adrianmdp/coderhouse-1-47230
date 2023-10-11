import { Button, Modal, Table } from "react-bootstrap";
import User from "./User";
import { useState } from "react";

const TableUsers = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState();

  const renderItems = () => {
    const rta = [];

    for (let i = 0; i < items.length; i++) {
      rta.push(
        <User
          key={items[i].name}
          thumbnail={items[i].thumbnail}
          name={items[i].name}
          age={items[i].age}
          weight={items[i].weight}
          id={items[i].id}
          onQuickViewClicked={() => setSelectedItem(items[i])}
          onDelete={(name) => {
            console.log(name);
          }}
        />
      );
    }
    return rta;
  };

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Peso</th>
          </tr>
        </thead>
        <tbody>{renderItems()}</tbody>
      </Table>
      <Modal show={!!selectedItem} onHide={() => setSelectedItem(undefined)}>
        {selectedItem && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedItem.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                className="img-fluid"
                src={selectedItem.thumbnail}
                alt={selectedItem.name}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => setSelectedItem(undefined)}
              >
                Close
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </>
  );
};

export default TableUsers;
