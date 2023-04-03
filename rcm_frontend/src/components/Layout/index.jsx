import React, { useState } from "react";
// import Header from "../Header";
import Sidebar from "../Sidebar";
import "./layout.scss";
import LayoutRouting from "./LayoutRouting";


const Layout = (props) => {
  const [expandMenu, setExpandMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const handleExpandMenu = () => {
    setExpandMenu(!expandMenu);
    setMobileMenu(false);
  };
  // const handleMobileMenu = () => {
  //   setExpandMenu(true);
  //   setMobileMenu(!mobileMenu);
  // };

  return (
    <div className="layout">
      {/* <Header handleMobileMenu={handleMobileMenu} /> */}
      <div className="layout-content min-vh-100 h-100">
        <div
          className={` ${expandMenu && !mobileMenu
            ? "layout-sidebar expandSidebar"
            : expandMenu && mobileMenu
              ? "layout-sidebar expandSidebar mobileView"
              : "layout-sidebar"
            }`}
        >
          <Sidebar handleExpandMenu={handleExpandMenu} />
        </div>

        <div className="layout-main">
          <div className="main-page-content">
            <LayoutRouting />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
