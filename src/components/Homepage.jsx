import styles from "../modules/Homepage.module.css";
import { useState } from "react";
import Form from "../pages/Form";
import Input from "../pages/Input";
import Button from "../pages/Button";

function Homepage() {
  const [value, setValue] = useState("");
  const [groups, setGroups] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <Form
      bgClass={styles.bg}
      className={styles.main}
      handleSubmit={handleSubmit}
    >
      <Input
        labelName={"Name of the Group"}
        value={groups}
        setValue={setGroups}
        htmlfor={"groupName"}
        aria-describedby="name of group"
        placeholder="input no of groups"
        className={styles.input}
      />

      <Input
        value={value}
        setValue={setValue}
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
