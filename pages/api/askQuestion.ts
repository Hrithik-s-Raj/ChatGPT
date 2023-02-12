// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import query from "@/lib/queryApi";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  answer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { prompt, id, model, session } = req.body;

  if (!prompt) {
    res.status(400).json({ answer: "Please provide a prompt!" });
    return;
  }

  if (!id) {
    res.status(400).json({ answer: "Please Provide a valid Chat ID" });
    return;
  }

  //   // Chat GPT query
  const response = await query(prompt, id, model);

  const message: Message = {
    text: response || "Unable to find the Answer",
  };

  //   const respose = await query(prompt, id, model);
  res.status(200).json({ answer: "I love you mugesh babu" });
}
