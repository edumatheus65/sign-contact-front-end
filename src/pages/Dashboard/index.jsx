import Logo from "../../assets/Logo.png";

export const Dashboard = ({ client, clientLogout }) => {
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
