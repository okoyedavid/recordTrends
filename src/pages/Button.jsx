import styles from "../modules/Button.module.css";

function Button({ label, type, handleClick = "" }) {
  return (
    <button onClick={handleClick} className={`${styles.btn} ${styles[type]}`}>
      {label}
    </button>
  );
}

export default Button;
