import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { InputPassword } from "../InputPassword";
import { Link } from "react-router-dom";

export const LoginForm = () => {
  const { register, handleSubmit } = useForm();

  const submit = (formdata) => {
    console.log(formdata);
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
        />
        <InputPassword
          label="Senha:"
          placeholder="Digite a sua senha:"
          {...register("password")}
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
