import { DefaultTemplate } from "../../components/DefaultTemplate";
import { RegisterForm } from "../../components/Forms/RegisterForm";

export const Register = () => {
  return (
    <DefaultTemplate>
      <h2>Register Page</h2>
      <RegisterForm />
    </DefaultTemplate>
  );
};
