import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section>
      <h2>404 - Página não encontrada</h2>
      <p>Desculpe, a página que você procura não existe.</p>

      <Link to="/">Voltar para Home</Link>
    </section>
  );
}

export default NotFound;
