import { session } from "@/lib/session";
import { withIronSessionApiRoute } from "iron-session/next";

const handlePost = async () => {
  return {
    id: "1",
    text: "a",
    date: new Date()
  };
};
const handleGet = async (user) => {
  const client = [
    {
      id: "1",
      refereeId: "1",
      text: "a",
      date: new Date()
    },
    {
      id: "2",
      refereeId: "1",
      text: "b",
      date: new Date()
    },
    {
      id: "3",
      refereeId: "1",
      text: "c",
      date: new Date()
    }
  ];

  const provider = [
    {
      id: "10",
      refereeId: "1",
      text: "a",
      date: new Date()
    },
    {
      id: "20",
      refereeId: "2",
      text: "b",
      date: new Date()
    },
    {
      id: "30",
      refereeId: "3",
      text: "c",
      date: new Date()
    }
  ];

  return user.provider ? provider : client;
  return user.role === "provider" ? provider : client;
};

export default withIronSessionApiRoute(async function (req, res) {
  const { provider, admin } = req.session.user;
  const user = req.session.user;
  console.log({ referralUserSession: user });
  if (req.method === "POST") {
    const referral = await handlePost();
    return res.send({
      data: referral
    });
  }

  const referrals = await handleGet(user);
  return res.send({
    data: referrals
  });
}, session);
