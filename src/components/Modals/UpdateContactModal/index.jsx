import { useForm } from "react-hook-form";
import { IoCloseSharp } from "react-icons/io5";
import { Input } from "../../Forms/Input";
import { ContactContext } from "../../../providers/ContactContext";
import { useContext } from "react";
import { RxUpdate } from "react-icons/rx";

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
    <div role="dialog">
      <div>
        <div>
          <h3>ADICIONAR CONTATO</h3>
          <button
            onClick={() => setEditingContact(null)}
            title="fechar"
            aria-label="close"
          >
            <IoCloseSharp />
          </button>
        </div>
        <form onSubmit={handleSubmit(submitUpdatedContact)}>
          <Input
            type="text"
            placeholder="Nome Completo:"
            {...register("fullName")}
            error={errors.fullName}
          />
          <Input
            type="email"
            placeholder="E-mails:"
            {...register("email")}
            error={errors.email}
          />
          <Input
            type="text"
            placeholder="Telefones:"
            {...register("phone")}
            error={errors.phone}
          />
          <div>
            <button className="btn" type="submit">
              Salvar Alterações
              <RxUpdate />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
