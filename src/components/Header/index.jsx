import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";

export const Header = () => {
  return (
    <header>
      <div>
        <div>
          <img src={Logo} alt="Logo Sign Contact" />
          <div>
            <Link to="/register">Cadastre-se</Link>
            <Link to="/">Entrar</Link>
          </div>
        </div>
      </div>
    </header>
  );
};
