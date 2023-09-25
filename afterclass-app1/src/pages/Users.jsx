import TableUsers from "../components/TableUsers";
import { usersService } from "../services/users";

const Users = () => {
  // Dame los usuarios

  const users = usersService.getUsers();

  return (
    <div>
      <h1>Users</h1>

      <TableUsers items={users} />
    </div>
  );
};

export default Users;
