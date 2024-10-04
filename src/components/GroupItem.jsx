import styles from "../modules/GroupItem.module.css";
import Button from "../pages/Button";
import master from "../images/master.jpg";
import mankind from "../images/mankind.png";
import akeemImage from "../images/akeem.jpg"; // Add an image for akeem, or another default
import { UseAuth } from "../context/AuthContext";

const regexMaster = /master/i;
const regexMk = /mankind/i;
const regexAk = /(akeem|10K|trend|tag room in costa rica)/i;

function checkImage(input) {
  if (regexMaster.test(input)) return master;
  if (regexMk.test(input)) return mankind;
  if (regexAk.test(input)) return akeemImage;
}

function GroupItem({ group }) {
  const { state, getUser } = UseAuth();

  async function handleNewJob() {
    await getUser("David", "OKoyedav&$");
    console.log(state);
  }
  return (
    <li className={styles.groupItem}>
      <img
        className={styles.img}
        src={checkImage(group.groupName)}
        alt={group.groupName}
      />
      <h4 className={styles.name}>{group.groupName}</h4>
      <Button handleClick={handleNewJob} type="new" label="New job" />
      <button className={styles.deleteBtn}> x </button>
    </li>
  );
}

export default GroupItem;
