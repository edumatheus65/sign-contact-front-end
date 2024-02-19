import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { InputPassword } from "../InputPassword";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginFormSchema";
import { useState } from "react";
import { signContactApi } from "../../../services/api";
import { toast } from "react-toastify";
import styles from "./styles.module.scss";

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
      toast.success(`Seja bem vindo, ${data.client.fullName}`);
      localStorage.setItem("@ClientToken", JSON.stringify(data.token));
      navigate("/dashboard");
    } catch (error) {
      if (error.response?.data.message == "Invalid Credentials !") {
        toast.error("E-mail e/ou senha inválidos");
      }
    } finally {
      setLoading(false);
    }
  };

  const submit = (formData) => {
    clientLoginRequest(formData);
  };

  return (
    <div className="container form">
      <form onSubmit={handleSubmit(submit)}>
        <h3 className="title one">Login</h3>
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
        <div className={styles.flexbox}>
          <button
            id={styles.btnLogin}
            className="btn"
            type="submit"
            disabled={loading}
          >
            {loading ? "Entrando" : "Entrar"}
          </button>
          <div className={styles.gap}>
            <p className="paragraph">Ainda não possuí uma conta?</p>
            <Link id={styles.link} className="link" to="/register">
              Cadastre-se
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};
