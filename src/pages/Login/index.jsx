import { DefaultTemplate } from "../../components/DefaultTemplate";
import { LoginForm } from "../../components/Forms/LoginForm";
import styles from "../../styles/pageBox.module.scss";

export const Login = ({ setClient }) => {
  return (
    <DefaultTemplate>
      <div className={styles.pageBox}>
        <LoginForm setClient={setClient} />
      </div>
    </DefaultTemplate>
  );
};
