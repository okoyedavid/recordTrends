import styles from "../modules/SignUp.module.css";
import Form from "../pages/Form";
import Input from "../pages/Input";
import Button from "../pages/Button";
import { useState } from "react";
import { UseRecordContext } from "../context/RecordsContext";

function SignUp() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { newUser } = UseRecordContext();

  function handleSubmit(e) {
    e.preventDefault();

    if (!user || !email || !password) return;

    const userInfo = {
      name: user,
      passWord: password,
      email,
    };

    newUser(userInfo);
  }
  return (
    <Form className={styles.form} handleSubmit={handleSubmit}>
      <Input
        labelName={"username"}
        value={user}
        setValue={setUser}
        placeholder="input your userName"
        className={styles.input}
      />
      <Input
        labelName={"Email"}
        value={email}
        setValue={setEmail}
        placeholder="input your Email"
        className={styles.input}
      />
      <Input
        labelName={"password"}
        value={password}
        setValue={setPassword}
        placeholder="input your password"
        className={styles.input}
        type="password"
      />
      <Button type={"primary"} label={"Create New Account"} />
    </Form>
  );
}

export default SignUp;
