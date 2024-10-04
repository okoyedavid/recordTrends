import Logo from "../pages/Logo";
import styles from "../modules/Total.module.css";

function Total({ groups }) {
  const total = groups.reduce(
    (total, curr) => total + curr.price * curr.jobs,
    0
  );
  return (
    <div className={styles.total}>
      <Logo size={"small"}> Total Earnings</Logo>

      <div>
        Total Earnings from: <time>12/09/24</time> - <time>19/09/24</time>
        <h2>You&apos;ve made {total}</h2>
      </div>
    </div>
  );
}

export default Total;
