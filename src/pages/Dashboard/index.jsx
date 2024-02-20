import { useContext } from "react";
import Logo from "../../assets/Logo.png";
import { ClientContext } from "../../providers/ClientContext";

export const Dashboard = () => {
  const { client, clientLogout } = useContext(ClientContext);

  return (
    <div>
      <div>
        <img src={Logo} alt="Logo Sign Contact" />
        <div>
          <p>Olá, {client?.fullName}</p>
          <button onClick={() => clientLogout()}>Sair</button>
        </div>
      </div>
    </div>
  );
};
