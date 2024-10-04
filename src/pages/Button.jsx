import styles from "../modules/Button.module.css";

function Button({ label, type, ...rest }) {
  return (
    <button {...rest} className={`${styles.btn} ${styles[type]}`}>
      {label}
    </button>
  );
}

export default Button;
