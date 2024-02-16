import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { InputPassword } from "../InputPassword";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginFormSchema";
import { useState } from "react";
import { signContactApi } from "../../../services/api";

export const LoginForm = ({ setClient }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const clientLoginRequest = async (formData) => {
    try {
      setLoading(true);
      const { data } = await signContactApi.post("/login", formData);
      setClient(data.client);
      localStorage.setItem("@ClientToken", JSON.stringify(data.token));
      navigate("/dashboard");
    } catch (error) {
      if (error.response?.data.message == "Invalid Credentials !") {
        alert("E-mail e/ou senha inválidos");
      }
    } finally {
      setLoading(false);
    }
  };

  const submit = (formData) => {
    clientLoginRequest(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <h3>Login</h3>
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
        <button type="submit">Entrar</button>
        <div>
          <p>Ainda não possuí uma conta?</p>
          <Link to="/register">Cadastre-se</Link>
        </div>
      </form>
    </div>
  );
};
