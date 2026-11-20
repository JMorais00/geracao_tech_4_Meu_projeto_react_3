import { Link } from "react-router-dom";

function Home() {
  return (
    <section>
      <h2>Bem-vindo à página inicial!</h2>
      <p>Este é um projeto para praticar navegação com React Router.</p>

      <Link to="/about">Conheça sobre o projeto</Link>
    </section>
  );
}

export default Home;
