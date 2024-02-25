import { DefaultTemplate } from "../../components/DefaultTemplate";
import { LoginForm } from "../../components/Forms/LoginForm";
import styles from "../../styles/pageBox.module.scss";

export const Login = () => {
  return (
    <DefaultTemplate>
      <div className={styles.pageBoxLogin}>
        <LoginForm />
      </div>
    </DefaultTemplate>
  );
};
