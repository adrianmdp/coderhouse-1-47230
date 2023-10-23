import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/Auth";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>Hola {user.name}</li>
      </ul>
    </nav>
  );
};

export default Navbar;
