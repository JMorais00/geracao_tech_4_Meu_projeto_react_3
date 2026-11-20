import { Link, useParams } from "react-router-dom";

function User() {
  const { id } = useParams();

  return (
    <section>
      <h2>Perfil do Usuário</h2>
      <p>Identificação do usuário: {id}</p>

      <Link to="/">Voltar para Home</Link>
    </section>
  );
}

export default User;
