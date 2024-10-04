import styles from "../modules/DashBoardItem.module.css";

function DashBoardItem({ groups }) {
  return (
    <li className={styles.dashboardItem}>
      <h4>{groups.groupName}</h4>
      <p>
        Group handle:<span>{groups.handle}</span>
      </p>

      <p>Number of Jobs: {groups.jobs}</p>
      <p>
        Earnings so far: ₦<span>{groups.jobs * groups.price}</span>
      </p>
    </li>
  );
}

export default DashBoardItem;
