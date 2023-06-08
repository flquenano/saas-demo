import { session } from "@/lib/session";
import { withIronSessionApiRoute } from "iron-session/next";

export default withIronSessionApiRoute(async function loginRoute(req, res) {
  const { username, password } = req.body;

  const providerCred = {
    is211: true,
    isAdmin: true,
    isProvider: true,
    provider: true,
    admin: true
  };

  const userData = {
    id: 230,
    idToken: "pjdc-91283c90-1u2d9",
    appToken: "=123=k9123c10-=823mv-c90u45",
    name: "firstname lastname",
    email: "email@ibmch.com",
    dob: "09/29/1001",
    ...(username === "provider" && providerCred),
    role: username === "provider" ? "provider" : "client"
  };

  req.session.user = userData;
  await req.session.save();
  const userViewOnly = { ...userData };
  delete userViewOnly.idToken;
  delete userViewOnly.appToken;

  if (username !== "provider") {
    return res.send({ user: userViewOnly });
  }

  delete userViewOnly.admin;
  delete userViewOnly.provider;
  delete userViewOnly.role;

  return res.send({ user: userViewOnly });
}, session);
