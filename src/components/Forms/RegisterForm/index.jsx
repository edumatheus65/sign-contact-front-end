import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { InputPassword } from "../InputPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerFormSchema";
import { signContactApi } from "../../../services/api";
import { useState } from "react";
import { toast } from "react-toastify";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerFormSchema),
  });

  const [loading, setLoading] = useState(false);

  const clientRegister = async (formData) => {
    try {
      setLoading(true);
      await signContactApi.post("/clients", formData);
      toast.success("Cadastro realizado com sucesso!");
    } catch (error) {
      if (
        error.response?.data.message == "Email Already exists" ||
        error.response?.data.message == "Phone Already exists"
      ) {
        toast.error("Cliente já cadastrado");
      }
    } finally {
      setLoading(false);
    }
  };

  const submit = (formdata) => {
    clientRegister(formdata);
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
        <button type="submit" disabled={loading}>
          {loading ? "Cadastrando" : "Cadastrar-se"}
        </button>
      </form>
    </div>
  );
};
