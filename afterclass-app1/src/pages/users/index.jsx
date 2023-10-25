import { Button } from "react-bootstrap";
import TableUsers from "../../components/TableUsers";
import { usersService } from "../../services/users";
import { useContext } from "react";
import { ModalContext } from "../../context/Modal";

const Users = () => {
  // Dame los usuarios

  const users = usersService.getUsers();

  const { openModal } = useContext(ModalContext);

  return (
    <div>
      <h1>Users</h1>

      <button onClick={() => openModal({ show: true })}>Abrir modal</button>

      <TableUsers items={users} />
    </div>
  );
};

export { Users };
