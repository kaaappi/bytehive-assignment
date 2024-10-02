import { NextApiRequest, NextApiResponse } from "next";

const validAuthData = [
  {
    username: "qwertyUsername",
    email: "qwertyEmail",
    password: "qwerty",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;

  const foundAuthData = validAuthData.find(
    (data) => data.email === email && data.password === password,
  );

  if (foundAuthData) {
    res.status(200).json({
      isAuthorized: true,
      username: foundAuthData.username,
    });
  } else {
    res
      .status(401)
      .json({ message: `Invalid credentials`, isAuthorized: false });
  }
}
