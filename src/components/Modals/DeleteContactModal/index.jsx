import { useContext } from "react";
import { ContactContext } from "../../../providers/ContactContext";
import { IoCloseSharp } from "react-icons/io5";
import styles from "./style.module.scss";

export const DeleteContactModal = ({ contact, onClose }) => {
  const { deleteContact } = useContext(ContactContext);

  return (
    <div role="dialog" className={styles.modalOverlay}>
      <div className={styles.modalBox}>
        <div className={styles.ModalHeaders}>
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
        <div className={styles.Texts}>
          <h3 className="title three">
            Tem certeza que deseja excluir este contato?
          </h3>
          <p className="title five">
            Essa ação não poderá ser desfeita, então pedimos que tenha cautela
            antes de concluir.
          </p>
        </div>
        <div className={styles.Buttons}>
          <button className="signupBtn" onClick={onClose}>
            Cancelar
          </button>
          <button className="btn" onClick={() => deleteContact(contact.id)}>
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
};
