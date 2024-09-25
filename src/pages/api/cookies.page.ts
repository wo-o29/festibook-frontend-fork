import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const origin = req.headers.origin;

  if (origin) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Access-Control-Allow-Credentials", "true");
  }

  const accessToken = req.cookies.accessToken ?? null;
  const refreshToken = req.cookies.refreshToken ?? null;

  res.status(200).json({ accessToken, refreshToken });
};

export default handler;
