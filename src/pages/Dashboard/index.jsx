import { useContext } from "react";
import { ClientContext } from "../../providers/ClientContext";
import { HeaderDashboard } from "../../components/HeaderDashboard";
import { SignContactSection } from "../../components/SignContactSection";
import { ContactContext } from "../../providers/ContactContext";
import { CreateContactModal } from "../../components/Modals/CreateContactModal";
import styles from "./style.module.scss";

export const Dashboard = () => {
  const { client } = useContext(ClientContext);
  const { createNewContactModal } = useContext(ContactContext);

  return (
    <>
      <HeaderDashboard />
      <main>
        <div className={styles.rows}>
          <div className="container">
            <div className={styles.flexbox}>
              <h3 className="title one"> Bem-vindo, {client?.fullName}</h3>
              <p className="paragraph failed">{client?.email}</p>
            </div>
          </div>
        </div>
        {createNewContactModal ? <CreateContactModal /> : null}
        <SignContactSection />
      </main>
    </>
  );
};
