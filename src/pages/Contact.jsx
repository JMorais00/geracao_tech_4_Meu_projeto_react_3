import { Link } from "react-router-dom";

function Contact() {
  return (
    <section>
      <h2>Contato</h2>
      <p>Esta é a página de contato do nosso site.</p>

      <Link to="/">Voltar para Home</Link>
    </section>
  );
}

export default Contact;
