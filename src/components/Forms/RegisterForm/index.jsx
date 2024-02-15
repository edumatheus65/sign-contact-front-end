import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export const RegisterForm = () => {
  const { register, handleSubmit } = useForm();

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
        <label>Nome Completo:</label>
        <input type="text" {...register("fullName")} />
        <label>Email:</label>
        <input type="email" {...register("email")} />
        <label>Senha:</label>
        <input type="password" {...register("password")} />
        <label>Telefone:</label>
        <input type="text" {...register("phone")} />
        <button type="submit">Cadastrar-se</button>
      </form>
    </div>
  );
};
