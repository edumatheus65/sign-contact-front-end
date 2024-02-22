import { useContext } from "react";
import Logo from "../../assets/Logo.png";
import { ClientContext } from "../../providers/ClientContext";
import { HeaderDashboard } from "../../components/HeaderDashboard";

export const Dashboard = () => {
  const { client } = useContext(ClientContext);

  return (
    <>
      <HeaderDashboard />
      <main>
        <div>
          <div className="container">
            <div>
              <h3>Seja bem-vindo, {client?.fullName}</h3>
              <p>{client?.email}</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
