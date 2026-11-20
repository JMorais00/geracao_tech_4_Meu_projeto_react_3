import { Link } from "react-router-dom";

function About() {
  return (
    <section>
      <h2>Sobre</h2>
      <p>Esta página apresenta informações sobre o projeto.</p>

      <Link to="/contact">Ir para contato</Link>
    </section>
  );
}

export default About;
