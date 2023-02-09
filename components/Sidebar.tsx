import React from "react";
import NewChat from "./NewChat";

function Sidebar() {
  return (
    <div className="p-2 flex-1 flex-col h-screen  ">
      <div className="flex-1 p-5 ">
        <div className="text-white ">
          <NewChat />
        </div>
        <div>Model Select </div>
        {/* Map through the chatRows */}
      </div>
    </div>
  );
}

export default Sidebar;
