import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    name: string;
    author: string;
};

export default function handler(
    _req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json({ name: "Mini Blog App", author: "Nitish saini" });
}
