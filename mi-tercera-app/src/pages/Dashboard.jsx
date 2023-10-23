import { useContext } from "react";
import { AuthContext } from "../contexts/Auth";

const Dashboard = () => {
  const miContext = useContext(AuthContext);

  console.log(miContext);

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
