import axios from "axios";

export default async function handler(req, res) {
  const url = "http://localhost:8080/verifyToken";

  const response = await fetch(url, {
    method: "GET",
  });
  return res.json({ response });
}
