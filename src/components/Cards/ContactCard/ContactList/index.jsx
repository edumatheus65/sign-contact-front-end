import { HiMiniPencil } from "react-icons/hi2";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useContext, useState } from "react";
import { ContactContext } from "../../../../providers/ContactContext";
import { DeleteContactModal } from "../../../Modals/DeleteContactModal";
import styles from "./style.module.scss";

export const ContactList = ({ contact }) => {
  const { setEditingContact } = useContext(ContactContext);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <li className={styles.contactList}>
      <div className={styles.flexbox}>
        <div className={styles.contactData}>
          <h3 className="title two">{contact.fullName}</h3>
          <p className="paragraph">{contact.email}</p>
          <p className="paragraph">{contact.phone}</p>
        </div>
        <div className={styles.cardIcons}>
          <button
            className="cardIcon"
            onClick={() => setEditingContact(contact)}
          >
            <HiMiniPencil size={15} />
          </button>
          <button className="cardIcon" onClick={() => setShowDeleteModal(true)}>
            <RiDeleteBin6Fill size={15} />
          </button>
        </div>
        {showDeleteModal && (
          <DeleteContactModal
            contact={contact}
            onClose={() => setShowDeleteModal(false)}
          />
        )}
      </div>
    </li>
  );
};
