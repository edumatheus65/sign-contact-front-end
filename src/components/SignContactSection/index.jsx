import { useContext } from "react";
import { IoPersonAddSharp } from "react-icons/io5";
import { ContactContext } from "../../providers/ContactContext";
import { ContactCard } from "../Cards/ContactCard";
import { UpdateContactModal } from "../Modals/UpdateContactModal";
import styles from "./style.module.scss";

export const SignContactSection = () => {
  const { setCreateNewContactModal, editingContact } =
    useContext(ContactContext);
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.flexbox}>
          <h3 className="title one">Adicione os seus contatos:</h3>
          <button
            className="btn"
            onClick={() => setCreateNewContactModal(true)}
          >
            Adicionar
            <IoPersonAddSharp size={21} />
          </button>
        </div>
        {editingContact ? <UpdateContactModal /> : null}
        <ContactCard />
      </div>
    </section>
  );
};
