import { HiMiniPencil } from "react-icons/hi2";
import { CiTrash } from "react-icons/ci";

export const ContactList = ({ contact }) => {
  return (
    <li>
      <div>
        <div>
          <h3>{contact.fullName}</h3>
          <p>{contact.email}</p>
          <p>{contact.phone}</p>
        </div>
        <div>
          <button>
            <HiMiniPencil size={15} />
          </button>
          <button>
            <CiTrash size={15} />
          </button>
        </div>
      </div>
    </li>
  );
};
