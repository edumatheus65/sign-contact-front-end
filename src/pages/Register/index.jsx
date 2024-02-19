import { DefaultTemplate } from "../../components/DefaultTemplate";
import { RegisterForm } from "../../components/Forms/RegisterForm";
import styles from "../../styles/pageBox.module.scss";

export const Register = () => {
  return (
    <DefaultTemplate>
      <div className={styles.pageBox}>
        <RegisterForm />
      </div>
    </DefaultTemplate>
  );
};
