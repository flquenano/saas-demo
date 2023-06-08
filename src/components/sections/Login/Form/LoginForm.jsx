import styles from "./loginForm.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";
import { userStore } from "@/context/user.context";
import { shallow } from "zustand/shallow";

const LoginForm = () => {
  const { user, ...userActions } = userStore(
    (state) => ({
      set: state.set
    }),
    shallow
  );

  const router = useRouter();
  const [form, setForm] = useState({
    username: "",
    password: ""
  });

  const handleSubmit = async () => {
    const res = await fetch("api/user/login", {
      method: "POST",
      body: JSON.stringify({
        username: form.username,
        password: form.password
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    console.log(res.status);
    const data = await res.json();
    console.log(data);
    if (res.status === 200) {
      userActions.set(data);
      router.push("/participant-registry");
    }
  };

  return (
    <form
      className={styles.loginForm}
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <fieldset>
        <label htmlFor="username"></label>
        <input
          type="text"
          id="username"
          onChange={(e) => {
            setForm((state) => ({ ...state, username: e.target.value }));
          }}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="password"></label>
        <input
          type="password"
          id="password"
          onChange={(e) => {
            setForm((state) => ({ ...state, password: e.target.value }));
          }}
        />
      </fieldset>
      <button type="Submit">Submit</button>
    </form>
  );
};

export default LoginForm;
