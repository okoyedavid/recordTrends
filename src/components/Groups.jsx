import styles from "../modules/Groups.module.css";
import GroupList from "./GroupList";

function Groups() {
  return (
    <div className={styles.groups}>
      <GroupList />
    </div>
  );
}

export default Groups;
