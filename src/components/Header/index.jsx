import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import styles from "./style.module.scss";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className={styles.flexbox}>
          <img src={Logo} alt="Logo Sign Contact" />
          <div className={styles.containerBtn}>
            <Link className="signupBtn" to="/register">
              Cadastre-se
            </Link>
            <Link className="btn" to="/">
              Entrar
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
