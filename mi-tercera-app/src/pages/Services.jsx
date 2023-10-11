import { Link } from "react-router-dom";

const Services = () => {
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
