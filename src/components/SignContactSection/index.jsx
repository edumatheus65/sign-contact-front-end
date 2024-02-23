import { useContext } from "react";
import { IoPersonAddSharp } from "react-icons/io5";
import { ContactContext } from "../../providers/ContactContext";
import { ContactCard } from "../Cards/ContactCard";
import { UpdateContactModal } from "../Modals/UpdateContactModal";

export const SignContactSection = () => {
  const { setCreateNewContactModal, editingContact } =
    useContext(ContactContext);
  return (
    <section>
      <div className="container">
        <div>
          <h3 className="title two">Adicione os seus contatos:</h3>
          <button
            className="btn"
            onClick={() => setCreateNewContactModal(true)}
          >
            Adicionar
            <IoPersonAddSharp size={21} />
          </button>
          {editingContact ? <UpdateContactModal /> : null}
          <ContactCard />
        </div>
      </div>
    </section>
  );
};
