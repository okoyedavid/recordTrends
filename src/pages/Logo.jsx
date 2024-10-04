import styles from "../modules/Logo.module.css";

function Logo({ children, size }) {
  return <h1 className={`${styles.logo} ${styles[size]}`}>{children}</h1>;
}

export default Logo;
