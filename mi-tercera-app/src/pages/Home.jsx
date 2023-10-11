import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et excepturi
        veritatis, eaque saepe quidem voluptatibus nemo iusto reprehenderit
        tenetur commodi repellendus temporibus placeat atque aspernatur harum
        officiis, reiciendis deserunt delectus?
        <Link to="/services/servicio-tecnico-pc">
          Abrir servicio técnico de pc
        </Link>
      </p>
    </div>
  );
};

export default Home;
