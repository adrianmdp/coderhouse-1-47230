import Button from "../components/Button";
import Layout from "../components/Layout";
import withAuth from "../hocs/withAuth";

const Login = () => {
  return (
    <Layout>
      <h1>Login</h1>

      <Button text="Enviar" className="btn btn-primary">
        <i className="fa fa-algo"></i>
        Esto lo va a tomar la prop children :)
      </Button>
      <table>

      </table>

      <ul></ul>

      <form action="">
        
      </form>
    </Layout>
  );
};

export default withAuth(Login);
