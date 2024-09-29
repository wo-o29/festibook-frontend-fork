import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { accessToken, refreshToken } = req.body;

  if (!accessToken || !refreshToken) {
    res.status(400).json({ message: "토큰이 존재하지 않습니다" });
    return;
  }

  const now = new Date();
  const accessTokenExpiration = new Date(now.getTime() + 43200000); // 12시간
  const refreshTokenExpiration = new Date(now.getTime() + 604800000); // 7일
  const ACCESS_TOKEN = `accessToken=${accessToken}; Path=/; Expires=${accessTokenExpiration.toUTCString()}; HttpOnly; Secure; SameSite=Strict`;
  const REFRESH_TOKEN = `refreshToken=${refreshToken}; Path=/; Expires=${refreshTokenExpiration.toUTCString()}; HttpOnly; Secure; SameSite=Strict`;

  res.setHeader("Set-Cookie", [ACCESS_TOKEN, REFRESH_TOKEN]);

  res.status(200).json({ message: "쿠키가 성공적으로 저장되었습니다" });
};

export default handler;
