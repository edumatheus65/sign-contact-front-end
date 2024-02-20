import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { InputPassword } from "../InputPassword";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginFormSchema";
import { useContext, useState } from "react";
import styles from "./styles.module.scss";
import { ClientContext } from "../../../providers/ClientContext";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });

  const [loading, setLoading] = useState(false);

  const { clientLoginRequest } = useContext(ClientContext);

  const submit = (formData) => {
    clientLoginRequest(formData, setLoading, reset);
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
