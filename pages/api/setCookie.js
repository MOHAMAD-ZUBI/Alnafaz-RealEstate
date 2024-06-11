import { serialize } from "cookie";
export default function handler(req, res) {
  const { token } = req.body;

  if (!token) {
    res.status(200).json({ message: "no token" });
  }

  const serialized = serialize("TOKEN", token, {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "development",
    path: "/",
  });
  res.setHeader("Set-Cookie", serialized);
  res.status(200);
  res.json({ success: "Success!" });
}
