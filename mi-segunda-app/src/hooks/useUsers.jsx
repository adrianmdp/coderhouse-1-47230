import { useEffect, useState } from "react";

const useUsers = () => {
  const [isAdmin, setIsAdmin] = useState();
  const [sessionToken, setSessionToken] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(JSON.parse(localStorage.getItem("token")));
    }
  }, []);

  const calcularSueldo = () => {};

  const cambiarPermisos = () => {
    // AL cambiar setea si el nuevo permiso es admin
    setIsAdmin(true /* o un false */);
  };

  const asignarTarea = () => {};

  return { calcularSueldo, cambiarPermisos, asignarTarea, isAdmin };
};

export default useUsers;
