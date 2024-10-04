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

// "groups": [
//         {
//           "groupName": "Master Group",
//           "jobs": 13,
//           "handle": "@aderopo_",
//           "price": 600,
//           "id": "0a5d"
//         },
//         {
//           "groupName": "10k Trend Group",
//           "jobs": 13,
//           "handle": "@graciebon9",
//           "price": 600,
//           "id": "0a6d"
//         },
//         {
//           "groupName": "Mankind Groups",
//           "jobs": 13,
//           "handle": "@__turaii",
//           "price": 600,
//           "id": "0a7d"
//         }
//       ]

// {
//   "id": "7a51",
//   "userInfo": {
//     "name": "Emeka",
//     "passWord": "OKoyedav&$",
//     "email": "emeka@gmail.com"
//   },
//   "groups": [
//     {
//       "groupName": "Master Group",
//       "jobs": 30,
//       "handle": "@aderopo_",
//       "price": 600,
//       "id": "0a8d"
//     },
//     {
//       "groupName": "Tag Room in costa rica",
//       "jobs": 13,
//       "handle": "@pherhonicha",
//       "id": "0a9d",
//       "price": 600
//     },
//     {
//       "groupName": "Mankind Groups",
//       "jobs": 13,
//       "handle": "@__turaii",
//       "id": "0a10d",
//       "price": 600
//     }
//   ]
// }
