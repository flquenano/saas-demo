import Logout from "@/components/features/logout/Logout";
import ParticipantRegistryLayout from "@/components/layouts/ParticipantRegistry";
import ParticipantRegistryClient from "@/components/sections/ParticipantRegistry/Client/Client";
import ParticipantRegistryProvider from "@/components/sections/ParticipantRegistry/Provider/Provider";
import { userStore } from "@/context/user.context";
import { session } from "@/lib/session";
import { withIronSessionSsr } from "iron-session/next";

export const getServerSideProps = withIronSessionSsr(async function getServerSideProps({ req }) {
  if (!req.session?.user) {
    return {
      redirect: {
        destination: "/login",
        permanent: false
      }
    };
  }
  console.log(req.session.user);
  return {
    props: {
      role: req.session.user.role
    }
  };
}, session);

const ParticipantRegistry = ({ role }) => {
  return role === "provider" ? <ParticipantRegistryProvider /> : <ParticipantRegistryClient />;
};

ParticipantRegistry.getLayout = (page) => {
  return <ParticipantRegistryLayout>{page}</ParticipantRegistryLayout>;
};

export default ParticipantRegistry;
