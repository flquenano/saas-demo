import { userStore } from "@/context/user.context";
import { useRouter } from "next/router";

const Logout = () => {
  const router = useRouter();
  const user = userStore((state) => ({
    reset: state.reset
  }));
  const handleClick = async () => {
    const res = await fetch("api/user/logout", {
      method: "POST",
      body: {
        id: "123"
      }
    });
    user.reset();
    if (res.status === 200) {
      router.push("/login");
    }
  };

  return <button onClick={handleClick}>Logout</button>;
};

export default Logout;
