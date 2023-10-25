import { useParams, useNavigate } from "react-router-dom";
import { usersService } from "../../services/users";
import { Button } from "react-bootstrap";

const UserDetail = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const user = usersService.getUser(id);

  return (
    <>
      <h1>
        <Button onClick={() => navigate(-1)}> {"<"} </Button>
        {user.name}
      </h1>

      <img src={user.thumbnail} alt={user.name} />

      <ul>
        <li>{user.weight}</li>
        <li>{user.age}</li>

        <li>
          <ul>
            {user.professions.map((p, i) => (
              <li key={p + i}>{p}</li>
            ))}
          </ul>
        </li>
        <li>
          <ul>
            {user.friends.map((f, i) => (
              <li key={f + 1}>{f}</li>
            ))}
          </ul>
        </li>
      </ul>
    </>
  );
};

export { UserDetail };
