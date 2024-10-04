import styles from "../modules/DashBoardList.module.css";
import DashBoardItem from "./DashBoardItem";

function DashBoardList({ groups }) {
  return (
    <ul className={styles.dashboardList}>
      {groups.map((item, index) => (
        <DashBoardItem groups={item} key={index} />
      ))}
    </ul>
  );
}

export default DashBoardList;
