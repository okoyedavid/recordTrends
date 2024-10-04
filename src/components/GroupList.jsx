import styles from "../modules/GroupList.module.css";
import Logo from "../pages/Logo";
import GroupItem from "./GroupItem";
import Spinner from "../pages/Spinner";
import { UseRecordContext } from "../context/RecordsContext";
import Message from "./Message";

function GroupList() {
  const { groups, loading, error } = UseRecordContext();

  if (loading) return <Spinner />;
  if (error) return <Message message={error} />;
  return (
    <ul className={styles.groupList}>
      <Logo size={"small"}>Groups you&apos;re in</Logo>
      {groups.map((item) => (
        <GroupItem group={item} key={item.id} />
      ))}
    </ul>
  );
}

export default GroupList;
