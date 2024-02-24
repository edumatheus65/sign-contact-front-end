import { useContext } from "react";
import { ClientContext } from "../../providers/ClientContext";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";

export const ErrorPage = () => {
  const { client } = useContext(ClientContext);

  return (
    <main>
      <div className="container">
        {client ? (
          <div className={styles.flexbox}>
            <h2 className="title yellow">Seja bem-vindo,{client.fullName}</h2>
            <Link className="paragraph" to="/dashboard">
              Cadastre o seu contato aqui:
            </Link>
          </div>
        ) : (
          <div className={styles.flexbox}>
            <h2>Faça login agora</h2>
            <Link className="paragraph" to="/" state={{ lastRoute: "*" }}>
              Login
            </Link>
          </div>
        )}
        <div className={styles.flexbox}>
          <h1 className="title one">Erro :404</h1>
          <p className="paragraph failed">
            Não foi possível encontrar a página
          </p>
        </div>
      </div>
    </main>
  );
};
