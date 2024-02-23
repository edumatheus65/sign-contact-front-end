import { HiMiniPencil } from "react-icons/hi2";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useContext } from "react";
import { ContactContext } from "../../../../providers/ContactContext";

export const ContactList = ({ contact }) => {
  const { deleteContact, setEditingContact } = useContext(ContactContext);
  return (
    <li>
      <div>
        <div>
          <h3 className="title two">{contact.fullName}</h3>
          <p className="paragraph">{contact.email}</p>
          <p className="paragraph">{contact.phone}</p>
        </div>
        <div>
          <button
            className="cardIcon"
            onClick={() => setEditingContact(contact)}
          >
            <HiMiniPencil size={15} />
          </button>
          <button
            className="cardIcon"
            onClick={() => deleteContact(contact.id)}
          >
            <RiDeleteBin6Fill size={15} />
          </button>
        </div>
      </div>
    </li>
  );
};
