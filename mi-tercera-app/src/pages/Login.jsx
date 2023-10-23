import { useContext } from "react";
import { AuthContext } from "../contexts/Auth";

const Login = () => {
  const { user, login } = useContext(AuthContext);

  return (
    <>
      <h1>Login</h1>

      <AuthContext.Consumer>{({ user, login }) => {}}</AuthContext.Consumer>

      <button onClick={() => login("adrianmdp", "asd123")}>Login</button>
    </>
  );
};

export default Login;
