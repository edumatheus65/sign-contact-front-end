import { DefaultTemplate } from "../../components/DefaultTemplate";
import { LoginForm } from "../../components/Forms/LoginForm";

export const Login = ({ setClient }) => {
  return (
    <DefaultTemplate>
      <LoginForm setClient={setClient} />
    </DefaultTemplate>
  );
};
