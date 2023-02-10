"use client";

import { useSession } from "next-auth/react";
import React from "react";
import NewChat from "./NewChat";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "../firebase";
import ChatRow from "./ChatRow";

function Sidebar() {
  const { data: session } = useSession();

  const [chats, loading, error] = useCollection(
    session && collection(db, "users", session.user?.email!, "chats")
  );

  // console.log(chats);

  return (
    <div className="p-2 flex-1 flex-col h-screen  ">
      <div className="flex-1 p-5">
        <div className="">
          <NewChat />

          {chats?.docs.map((chat) => {
            return <ChatRow key={chat.id} id={chat.id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
