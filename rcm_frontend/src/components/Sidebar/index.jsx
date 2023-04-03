import React from "react";
import "./sidebar.scss";
import SidebarContent from "./SidebarContent";
const Sidebar = ({handleExpandMenu}) => {

  return (
    <div className="h-full">
      <div className="h-full">
        <SidebarContent handleExpandMenu={handleExpandMenu} />
      </div>
    </div>
  );
};

export default Sidebar;
