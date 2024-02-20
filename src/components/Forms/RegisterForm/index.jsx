import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { InputPassword } from "../InputPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerFormSchema";
import { useContext, useState } from "react";
import styles from "./style.module.scss";
import { ClientContext } from "../../../providers/ClientContext";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(registerFormSchema),
  });

  const [loading, setLoading] = useState(false);

  const { clientRegister } = useContext(ClientContext);

  const submit = (formdata) => {
    clientRegister(formdata, setLoading, reset);
  };

  return (
    <div className="container form">
      <form onSubmit={handleSubmit(submit)}>
        <div className={styles.arrowFlexbox}>
          <div>
            <h3 className="title one">Cadastro</h3>
          </div>
          <div className={styles.gapArrow}>
            <AiOutlineArrowLeft className="arrow" />
            <Link className="link" to={"/"}>
              Voltar
            </Link>
          </div>
        </div>
        <Input
          label="Nome Completo:"
          type="text"
          placeholder="Digite o seu nome completo"
          {...register("fullName")}
          error={errors.fullName}
          disabled={loading}
        />
        <Input
          label="Email:"
          type="email"
          placeholder="Digite o seu email:"
          {...register("email")}
          error={errors.email}
          disabled={loading}
        />
        <InputPassword
          label="Senha:"
          placeholder="Digite a sua senha:"
          {...register("password")}
          error={errors.password}
          disabled={loading}
        />
        <InputPassword
          label="Confirmar Senha:"
          placeholder="Confirme a sua senha:"
          {...register("confirmPassword")}
          error={errors.confirmPassword}
          disabled={loading}
        />
        <Input
          label="Telefone:"
          type="text"
          placeholder="Digite o seu telefone:"
          {...register("phone")}
          error={errors.phone}
          disabled={loading}
        />
        <div className={styles.btn}>
          <button className="btn" type="submit" disabled={loading}>
            {loading ? "Cadastrando" : "Cadastrar-se"}
          </button>
        </div>
      </form>
    </div>
  );
};
