import React from "react";
import "./sidebar.scss";
import SidebarContent from "./SidebarContent";
const Sidebar = ({handleExpandMenu}) => {
  // function tToggle() {
  //   var body = document.body;
  //   if (window.screen.width <= 998) {
  //     body.classList.toggle("sidebar-enable");
  //   } else {
  //     body.classList.toggle("vertical-collpsed");
  //     body.classList.toggle("sidebar-enable");
  //   }
  // }

  return (
    <div className="h-100">
      {/* <button
        type="button"
        onClick={() => {
          tToggle();
        }}
        className="btn btn-sm px-3 font-size-16 header-item"
        id="vertical-menu-btn"
      >
        <i className="fa fa-fw fa-bars" />
      </button> */}
      <div className="h-100">
        <SidebarContent handleExpandMenu={handleExpandMenu} />
      </div>
    </div>
  );
};

export default Sidebar;
