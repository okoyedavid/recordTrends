import { UseRecordContext } from "../context/RecordsContext";
import styles from "../modules/TrackEarnings.module.css";
import Logo from "../pages/Logo";
import DashBoardList from "./DashBoardList";
import Message from "./Message";
import Total from "./Total";

function DashBoard() {
  const { groups, error } = UseRecordContext();
  if (error) return <Message message={"There are no groups to display"} />;
  return (
    <div className={styles.earnings}>
      <Logo> Earnings </Logo>
      <DashBoardList groups={groups} />
      <Total groups={groups} />
    </div>
  );
}

export default DashBoard;
