import { useContext } from "react";
import Logo from "../../assets/Logo.png";
import { RiLogoutCircleLine } from "react-icons/ri";
import { ClientContext } from "../../providers/ClientContext";

export const HeaderDashboard = () => {
  const { clientLogout } = useContext(ClientContext);
  return (
    <header>
      <div className="container">
        <div>
          <img src={Logo} alt="Logo Sign Contact" />
          <button className="signupBtn" onClick={() => clientLogout()}>
            Sair <RiLogoutCircleLine />
          </button>
        </div>
      </div>
    </header>
  );
};
