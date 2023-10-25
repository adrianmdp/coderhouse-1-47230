import { useContext, useState } from "react";
import { AuthContext } from "../contexts/Auth";

const Login = ({ isAdmin, theme }) => {
  const { user, login } = useContext(AuthContext);

  const [show, setShow] = useState(false);

  console.log(isAdmin);

  return (
    <>
      {show && (
        <div className={isAdmin && "dark"}>
          <Component />
        </div>
      )}

      {/* {isAdmin ? (
        <>Este usuario es administrador</>
      ) : (
        <>Este usuario no es administrador</>
      )} */}

      <>Este usuario {!isAdmin && "NO"} es administrador</>

      <button onClick={() => setShow(!show)}>Cambiar</button>

      <h1>Login</h1>

      <AuthContext.Consumer>{({ user, login }) => {}}</AuthContext.Consumer>

      <button onClick={() => login("adrianmdp", "asd123")}>Login</button>
    </>
  );
};

export default Login;
