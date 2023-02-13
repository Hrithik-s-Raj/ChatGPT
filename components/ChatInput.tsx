"use client";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { serverTimestamp, collection, addDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { toast } from "react-hot-toast";
type Props = {
  id: string;
};

function ChatInput({ id }: Props) {
  const [prompt, setPrompt] = useState("");
  const { data: session } = useSession();

  //useswr to get the model

  const model = "text-davinci-003";
  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!prompt) return;

    const input = prompt.trim();
    setPrompt("");

    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar:
          session?.user?.image! ||
          `https://ui-avatars.com/api/?name=${session?.user?.name}`,
      },
    };

    await addDoc(
      collection(db, "users", session?.user?.email!, "chats", id, "messages"),
      message
    );

    //Toast Notification loading

    const notification = toast.loading(" KTern-GPT is Thinking .....");

    await fetch("/api/askQuestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: input,
        id,
        model,
        session,
      }),
    }).then(() => {
      //Toast Notifiaction Succesfull
      toast.success("Yoo Here...", {
        id: notification,
      });
    });
  };

  return (
    <div className="bg-gray-700/50 text-black rounded-lg text-sm m-4">
      <form onSubmit={sendMessage} className="p-5 space-x-5 flex ">
        <input
          className=" bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300"
          disabled={!session}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          type="text"
          placeholder="Type your message here ...."
        />
        <button
          disabled={!prompt || !session}
          type="submit"
          className="bg-[#ae1925] hover:opacity-50 text-white font-bold px-4 py-2 rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
        </button>
      </form>

      <div>{/* MOdel Selection */}</div>
    </div>
  );
}

export default ChatInput;
