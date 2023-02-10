"use client";

import { useSession } from "next-auth/react";
import React from "react";
import NewChat from "./NewChat";

function Sidebar() {
  const { data: session } = useSession();
  return (
    <div className="p-2 flex-1 flex-col h-screen  ">
      <div className="flex-1 p-5 ">
        <div className="text-white ">
          <NewChat />
        </div>
        {/* <div>Model Select </div> */}
        {/* Map through the chatRows */}
      </div>

      {session && (
        <img
          src={session.user?.image}
          alt="Profile Picture"
          className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opa
      "
        />
      )}
    </div>
  );
}

export default Sidebar;
