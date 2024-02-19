import { forwardRef } from "react";
import styles from "./style.module.scss";

export const Input = forwardRef(({ label, error, ...rest }, ref) => {
  return (
    <div className={styles.inputBox}>
      <label className="label">{label}</label>
      <input ref={ref} {...rest} />
      <div>
        {error ? <p className="paragraph failed">{error.message}</p> : null}
      </div>
    </div>
  );
});
