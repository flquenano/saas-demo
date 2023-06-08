import { session } from "@/lib/session";
import { withIronSessionApiRoute } from "iron-session/next";

export default withIronSessionApiRoute(async function getReferralById(req, res) {
  // const { id } = JSON.parse(req.body);
  req.session.destroy();
  res.send({});
}, session);
