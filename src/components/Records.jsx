import { useEffect } from "react";
import styles from "../modules/Records.module.css";
import Groups from "./Groups";
import DashBoard from "./DashBoard";
import { UseRecordContext } from "../context/RecordsContext";
import { UseAuth } from "../context/AuthContext";

function Records() {
  const { fetchGroup } = UseRecordContext();
  const { id } = UseAuth();

  useEffect(() => {
    fetchGroup();
  }, []);

  return (
    <div className={styles.records}>
      <Groups />
      <DashBoard />
    </div>
  );
}

export default Records;
