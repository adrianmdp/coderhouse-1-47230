import { useContext } from "react";
import {
  Navbar as NavbarBS,
  Container,
  Nav,
  NavDropdown,
  Button,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { ModalContext } from "../context/Modal";

const Navbar = () => {
  const { openModal } = useContext(ModalContext);

  const onOpenModal = () => {
    openModal({
      show: true,
      title: "Cerrar sesión",
      description: "¿Estás seguro que querés cerrar sesión?",
      successText: "Si, cerrar",
      errorText: "No, volver",
    });
  };

  return (
    <NavbarBS expand="lg" className="bg-body-tertiary">
      <Container>
        <NavbarBS.Brand href="#home">React-Bootstrap</NavbarBS.Brand>
        <NavbarBS.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBS.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/users">
              Users
            </NavLink>
            <Nav.Link href="#link">Link</Nav.Link>
            <Button onClick={onOpenModal}>Cerrar sesión</Button>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </NavbarBS.Collapse>
      </Container>
    </NavbarBS>
  );
};

export default Navbar;
