import { HiMiniPencil } from "react-icons/hi2";
import { CiTrash } from "react-icons/ci";
import { useContext } from "react";
import { ContactContext } from "../../../../providers/ContactContext";

export const ContactList = ({ contact }) => {
  const { deleteContact, setEditingContact } = useContext(ContactContext);
  return (
    <li>
      <div>
        <div>
          <h3>{contact.fullName}</h3>
          <p>{contact.email}</p>
          <p>{contact.phone}</p>
        </div>
        <div>
          <button onClick={() => setEditingContact(contact)}>
            <HiMiniPencil size={15} />
          </button>
          <button onClick={() => deleteContact(contact.id)}>
            <CiTrash size={15} />
          </button>
        </div>
      </div>
    </li>
  );
};
