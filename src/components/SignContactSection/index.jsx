import { useContext } from "react";
import { IoPersonAddSharp } from "react-icons/io5";
import { ContactContext } from "../../providers/ContactContext";

export const SignContactSection = () => {
  const { setCreateNewContactModal } = useContext(ContactContext);
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
        </div>
      </div>
    </section>
  );
};
