import { useEffect, useState } from "react";
import useUsers from "../hooks/useUsers";
import withAuth from "../hocs/withAuth";

const Dashboard = () => {
  const [value, setValue] = useState(true);
  const [value2, setValue2] = useState(true);

  const { cambiarPermisos } = useUsers();

  useEffect(() => {
    console.log("Hola mundo");
  }, [value]);

  return (
    <div>
      Este es el Dashboard {value}
      <button onClick={() => setValue(false)}>Cambiar</button>
      <button onClick={() => cambiarPermisos("editor")}>Cambiar permiso</button>
    </div>
  );
};

export default withAuth(Dashboard);
