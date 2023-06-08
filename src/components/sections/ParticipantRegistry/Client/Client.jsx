import Logout from "@/components/features/logout/Logout";
import styles from "./prClient.module.scss";
import { useState } from "react";
import { userStore } from "@/context/user.context";

const ParticipantRegistryClient = () => {
  const user = userStore((state) => ({ data: state.user }));
  const [referrals, setReferrals] = useState([]);

  const handleGetReferrals = async () => {
    const res = await fetch("api/referrals", {
      method: "GET"
    });
    console.log(res.status);
    const data = await res.json();
    console.log(data);
    setReferrals(data);
  };
  return (
    <div className={styles.prClient}>
      <pre>{JSON.stringify(user, null, 2)}</pre>

      <h1
        style={{
          fontSize: "3rem"
        }}
      >
        Client page
      </h1>
      <br />
      <br />
      <button
        onClick={() => {
          handleGetReferrals();
        }}
      >
        Get Referrals
      </button>
      <br />
      <br />
      <Logout />
      <br />
      <br />
      <pre>{JSON.stringify(referrals, null, 2)}</pre>
    </div>
  );
};

export default ParticipantRegistryClient;
