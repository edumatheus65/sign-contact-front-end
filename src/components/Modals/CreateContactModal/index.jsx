import { useForm } from "react-hook-form";
import { IoCloseSharp } from "react-icons/io5";
import { Input } from "../../Forms/Input";
import { IoPersonAddSharp } from "react-icons/io5";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateContactModalSchema } from "./CreateContactModalSchema";
import { ContactContext } from "../../../providers/ContactContext";
import { useContext } from "react";
import styles from "./style.module.scss";

export const CreateContactModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(CreateContactModalSchema),
  });

  const { setCreateNewContactModal, createContact } =
    useContext(ContactContext);

  const submitNewContact = async (formData) => {
    await createContact(formData);
  };
  return (
    <div className={styles.modalOverlay} role="dialog">
      <div className={styles.modalBox}>
        <div className={styles.ModalHeaders}>
          <h3 className="title two">ADICIONAR CONTATO</h3>
          <button
            onClick={() => setCreateNewContactModal(false)}
            title="fechar"
            aria-label="close"
            className="iconsBtn"
          >
            <IoCloseSharp size={22} />
          </button>
        </div>
        <form
          onSubmit={handleSubmit(submitNewContact)}
          className={styles.formModal}
        >
          <Input
            type="text"
            placeholder="Nome Completo:"
            {...register("fullName")}
            error={errors.fullName}
          />
          <Input
            type="email"
            placeholder="E-mail:"
            {...register("email")}
            error={errors.email}
          />
          <Input
            type="text"
            placeholder="Telefone:"
            {...register("phone")}
            error={errors.phone}
          />
          <div>
            <button className="btn" type="submit">
              Adicionar
              <IoPersonAddSharp size={20} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
