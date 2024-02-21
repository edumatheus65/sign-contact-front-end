import animation from "../../assets/animation.svg";
import styles from "./style.module.scss";

export const Loading = () => {
  return (
    <div className={styles.loadingBox}>
      <img src={animation} alt="Carregando..." />
    </div>
  );
};
