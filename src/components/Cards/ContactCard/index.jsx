import { useContext } from "react";
import { ContactContext } from "../../../providers/ContactContext";
import { ContactList } from "./ContactList";
import styles from "./style.module.scss";
import { EmptyContactAnimation } from "../../EmptyContactAnimation";

export const ContactCard = () => {
  const { contactList } = useContext(ContactContext);

  return (
    <ul className={styles.contactCard}>
      {contactList.length > 0 ? (
        contactList?.map((contact) => (
          <div key={contact.id}>
            <ContactList contact={contact} />
          </div>
        ))
      ) : (
        <>
          <h2 className="title yellow">A sua lista de contatos está vazia</h2>
          <EmptyContactAnimation />
        </>
      )}
    </ul>
  );
};
