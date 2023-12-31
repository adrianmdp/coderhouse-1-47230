import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/Auth";

const Services = ({isLoading}) => {
  const miContext = useContext(AuthContext);

  console.log(miContext);

  const props = {
    color: "red",
    name: "Adrian",
    country: "Argentina"
  }

  if(isLoading) return <Spinner {...props} />


  return (
    <div>
      <h1>Services</h1>

      <ul>
        <li>
          <Link to="/services/servicio-tecnico-pc">PC</Link>
        </li>
        <li>
          <Link to="/services/servicio-tecnico-tv">TV</Link>
        </li>
        <li>
          <Link to="/services/servicio-tecnico-celulares">Celulares</Link>
        </li>
        <li>
          <Link to="/services/servicio-tecnico-sonido">Sonido</Link>
        </li>
      </ul>
    </div>
  );
};

export default Services;
