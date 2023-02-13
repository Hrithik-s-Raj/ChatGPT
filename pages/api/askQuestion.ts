// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import query from "@/lib/queryApi";
import type { NextApiRequest, NextApiResponse } from "next";
import admin from "firebase-admin";
import { adminDb } from "@/firebaseAdmin";
import { collection, doc } from "firebase/firestore";
import { firestore } from "firebase-admin";

type Data = {
  answer: any;
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
  console.log(response);

  const message: Message = {
    text: response || "Unable to find the Answer",
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: "Chatgpt",
      name: "Chatgpt",
      avatar:
        "https://storage.googleapis.com/ktern-public-files/website/icons/favicon.ico",
    },
  };

  await adminDb
    .collection("users")
    .doc(session?.user?.email)
    .collection("chats")
    .doc(id)
    .collection("messages")
    .add(message);

  console.log("ascamsncl'aksnc'l", message.text);
  const respose = await query(prompt, id, model);
  res.status(200).json({ answer: message.text });
}
