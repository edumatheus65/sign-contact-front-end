import { useContext } from "react";
import Logo from "../../assets/Logo.png";
import { RiLogoutCircleLine } from "react-icons/ri";
import { ClientContext } from "../../providers/ClientContext";
import styles from "./style.module.scss";

export const HeaderDashboard = () => {
  const { clientLogout } = useContext(ClientContext);
  return (
    <header>
      <div className="container">
        <div className={styles.flexbox}>
          <img src={Logo} alt="Logo Sign Contact" />
          <button className="signupBtn" onClick={() => clientLogout()}>
            Sair <RiLogoutCircleLine />
          </button>
        </div>
      </div>
    </header>
  );
};
