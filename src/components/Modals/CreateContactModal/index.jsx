import { useForm } from "react-hook-form";
import { IoCloseSharp } from "react-icons/io5";
import { Input } from "../../Forms/Input";
import { IoPersonAddSharp } from "react-icons/io5";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateContactModalSchema } from "./CreateContactModalSchema";
import { ContactContext } from "../../../providers/ContactContext";
import { useContext } from "react";

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
    <div role="dialog">
      <div>
        <div>
          <h3>ADICIONAR CONTATO</h3>
          <button
            onClick={() => setCreateNewContactModal(false)}
            title="fechar"
            aria-label="close"
          >
            <IoCloseSharp />
          </button>
        </div>
        <form onSubmit={handleSubmit(submitNewContact)}>
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
              Adicionar
              <IoPersonAddSharp size={20} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
