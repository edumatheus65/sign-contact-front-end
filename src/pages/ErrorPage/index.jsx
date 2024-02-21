import { useContext } from "react";
import { ClientContext } from "../../providers/ClientContext";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
  const { client } = useContext(ClientContext);

  return (
    <main>
      <div className="container">
        {client ? (
          <>
            <h2>Seja bem-vindo,{client.fullName}</h2>
            <Link to="/dashboard">Cadastre o seu contato aqui:</Link>
          </>
        ) : (
          <div>
            <h2>Faça login agora</h2>
            <Link to="/" state={{ lastRoute: "*" }}>
              Login
            </Link>
          </div>
        )}
        <h1>Erro :404</h1>
        <p>Não foi possível encontrar a página</p>
      </div>
    </main>
  );
};
