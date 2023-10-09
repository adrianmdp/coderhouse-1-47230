import useUsers from "../hooks/useUsers";

const Users = () => {
  const { calcularSueldo, isAdmin } = useUsers();

  const algunaOperacion = () => {
    if (isAdmin) {
      // Algo
    }
  };

  return (
    <>
      <h1>Users</h1>

      <button onClick={calcularSueldo}>Calcular</button>

      {/* Si es admin, puede ver este botón */}
      <button>Ver salario</button>
    </>
  );
};

export default Users;
