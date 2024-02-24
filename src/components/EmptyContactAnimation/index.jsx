import emptyContact from "../../assets/emptyContact.svg";
import styles from "./style.module.scss";

export const EmptyContactAnimation = () => {
  return (
    <div className={styles.flexbox}>
      <img src={emptyContact} alt="animation" />
    </div>
  );
};
