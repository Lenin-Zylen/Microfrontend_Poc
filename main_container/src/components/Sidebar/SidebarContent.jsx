import React from "react";
import "./sidebar.scss";
import { Link } from "react-router-dom";

const SidebarContent = ({ handleExpandMenu }) => {
  return (
    <>
      <div id="sidebar-menu">
        <div className="menu-title" onClick={handleExpandMenu}>
          <i className="bx bx-menu"></i>
        </div>
        <ul className="metismenu list-unstyled" id="side-menu">
          <li>
            <a href="/rcm" style={{ textDecoration: "none" }}>
              <i className="bx bxs-dashboard"></i>
              <span className="menuText">RCM Dashboard</span>
            </a>
          </li>
          <li>
            <a href="/erx" style={{ textDecoration: "none" }}>
              <i className="bx bxs-envelope"></i>
              <span className="menuText">ERX Dashboard</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SidebarContent;
