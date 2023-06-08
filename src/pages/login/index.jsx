import LoginLayout from "@/components/layouts/Login";
import styles from "./login.module.scss";
import LoginForm from "@/components/sections/Login/Form/LoginForm";

import { session } from "@/lib/session";
import { withIronSessionSsr } from "iron-session/next";

export const getServerSideProps = withIronSessionSsr(async function getServerSideProps({ req }) {
  console.log(req.session?.user);
  if (req.session?.user) {
    return {
      redirect: {
        destination: "/participant-registry",
        permanent: false
      }
    };
  }

  return {
    props: {}
  };
}, session);

const Login = () => {
  return (
    <section className={styles.login}>
      <LoginForm />
    </section>
  );
};

Login.getLayout = (page) => <LoginLayout>{page}</LoginLayout>;

export default Login;
