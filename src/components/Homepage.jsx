import styles from "../modules/Homepage.module.css";
import { useEffect, useState } from "react";
import Form from "../pages/Form";
import Input from "../pages/Input";
import Button from "../pages/Button";
import { UseRecordContext } from "../context/RecordsContext";

function Homepage() {
  const [handle, setHandle] = useState("@turaii");
  const [groupName, setGroupName] = useState("Mankind");
  const [price, setPrice] = useState("800");
  const { upDateGroup, fetchGroup } = UseRecordContext();

  useEffect(() => {
    fetchGroup();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    const group = {
      groupName,
      jobs: 0,
      handle,
      price: price,
      id: Date.now().toString(),
    };

    upDateGroup(group);
  }
  return (
    <Form
      bgClass={styles.bg}
      className={styles.main}
      handleSubmit={handleSubmit}
    >
      <Input
        labelName={"Name of the Group"}
        value={groupName}
        setValue={setGroupName}
        htmlfor={"groupName"}
        aria-describedby="name of group"
        placeholder="input name of group"
        className={styles.input}
      />

      <Input
        value={handle}
        setValue={setHandle}
        labelName={"input account handle"}
        htmlfor={"AccountHandleLabel"}
        aria-describedby="input your handle"
        placeholder="input your account handle"
        className={styles.input}
      />

      <Input
        value={price}
        setValue={setPrice}
        labelName={"How much are you paid per job"}
        htmlfor={"AccountPay"}
        aria-describedby="input Your pay"
        placeholder="Price per job"
        className={styles.input}
      />

      <Button label={"Add"} type="primary" />
    </Form>
  );
}

export default Homepage;
