import { PlusIcon } from "@heroicons/react/24/solid";
import React from "react";

function NewChat() {
  return (
    <div className=" border-2 border-red-300 animate-pulse chatRow bg-white transition-all duration-600 ease-out">
      <PlusIcon className="h-4 w-4" />
      <p>New Chat</p>
    </div>
  );
}

export default NewChat;
