import { useContext } from "react";
import { ContactContext } from "../../../providers/ContactContext";
import { IoCloseSharp } from "react-icons/io5";

export const DeleteContactModal = ({ contact, onClose }) => {
  const { deleteContact } = useContext(ContactContext);

  return (
    <div role="dialog">
      <div>
        <div>
          <h3 className="title two">CONFIRMAÇÃO DE EXCLUSÃO</h3>
          <button
            onClick={onClose}
            title="fechar"
            aria-label="close"
            className="iconsBtn"
          >
            <IoCloseSharp size={22} />
          </button>
        </div>
        <div>
          <h3 className="title three">
            Tem certeza que deseja excluir este contato?
          </h3>
          <p className="paragraph">
            Essa ação não poderá ser desfeita, então pedimos que tenha cautela
            antes de concluir
          </p>
        </div>
        <div>
          <button className="signupBtn" onClick={onClose}>
            Cancelar
          </button>
          <button className="btn" onClick={() => deleteContact(contact.id)}>
            Sim,excluir este contato
          </button>
        </div>
      </div>
    </div>
  );
};
