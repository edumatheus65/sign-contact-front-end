import { useForm } from "react-hook-form";
import { IoCloseSharp } from "react-icons/io5";
import { Input } from "../../Forms/Input";
import { ContactContext } from "../../../providers/ContactContext";
import { useContext } from "react";
import { RxUpdate } from "react-icons/rx";
import styles from "./style.module.scss";

export const UpdateContactModal = () => {
  const { editingContact, setEditingContact, updateContact } =
    useContext(ContactContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: editingContact.fullName,
      email: editingContact.email,
      phone: editingContact.phone,
    },
  });

  const submitUpdatedContact = async (formData) => {
    updateContact(formData);
  };
  return (
    <div role="dialog" className={styles.modalOverlay}>
      <div className={styles.modalBox}>
        <div className={styles.ModalHeaders}>
          <h3 className="title two">EDITAR CONTATO</h3>
          <button
            onClick={() => setEditingContact(null)}
            title="fechar"
            aria-label="close"
            className="iconsBtn"
          >
            <IoCloseSharp size={22} />
          </button>
        </div>
        <form
          className={styles.formModal}
          onSubmit={handleSubmit(submitUpdatedContact)}
        >
          <Input
            type="text"
            {...register("fullName")}
            error={errors.fullName}
          />
          <Input type="email" {...register("email")} error={errors.email} />
          <Input type="text" {...register("phone")} error={errors.phone} />
          <div>
            <button className="btn" type="submit">
              Salvar Alterações
              <RxUpdate size={20} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
