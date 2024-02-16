import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { InputPassword } from "../InputPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerFormSchema";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerFormSchema),
  });

  const submit = (formdata) => {
    console.log(formdata);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <div>
            <h3>Cadastro</h3>
            <p>Preencha os campos para cadastrar-se</p>
          </div>
          <div>
            <AiOutlineArrowLeft />
            <Link to={"/"}>Voltar</Link>
          </div>
        </div>
        <Input
          label="Nome Completo:"
          type="text"
          placeholder="Digite o seu nome completo"
          {...register("fullName")}
          error={errors.fullName}
        />
        <Input
          label="Email:"
          type="email"
          placeholder="Digite o seu email:"
          {...register("email")}
          error={errors.email}
        />
        <InputPassword
          label="Senha:"
          placeholder="Digite a sua senha:"
          {...register("password")}
          error={errors.password}
        />
        <InputPassword
          label="Confirmar Senha:"
          placeholder="Confirme a sua senha:"
          {...register("confirmPassword")}
          error={errors.confirmPassword}
        />
        <Input
          label="Telefone:"
          type="text"
          placeholder="Digite o seu telefone:"
          {...register("phone")}
          error={errors.phone}
        />
        <button type="submit">Cadastrar-se</button>
      </form>
    </div>
  );
};
