import styles from "../modules/LoginForm.module.css";
import { useState } from "react";
import Button from "../pages/Button";
import Form from "../pages/Form";
import Input from "../pages/Input";
import Message from "./Message";
import Spinner from "../pages/Spinner";
import { UseAuth } from "../context/AuthContext";

function Login() {
  const { getUser, loading, error } = UseAuth();
  const [userName, setUserName] = useState("okoye");
  const [password, setPassword] = useState("Okoyedav7$");
  const [type, setType] = useState("password");

  function handleSubmit(e) {
    e.preventDefault();
    getUser(userName, password);
  }

  return (
    <Form handleSubmit={handleSubmit} className={styles.loginContainer}>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Input
            htmlfor={"Username"}
            labelName={"Input your Username"}
            value={userName}
            setValue={setUserName}
            className={styles.input}
            placeholder="Username"
          />
          <Input
            htmlfor={"password"}
            labelName={"Input your Password"}
            value={password}
            setValue={setPassword}
            className={styles.input}
            type={type}
            placeholder="Password"
          />
        </>
      )}
      <Button type={"primary"} label={"Login"} />
      {error && <Message message={error} />}
    </Form>
  );
}

export default Login;
