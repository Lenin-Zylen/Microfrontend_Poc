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
            <Link to="/" style={{ textDecoration: "none" }}>
              <i className="bx bxs-dashboard"></i>
              <span className="menuText">ERX 1</span>
            </Link>
          </li>
          <li>
            <Link to="/erx" style={{ textDecoration: "none" }}>
              <i className="bx bxs-envelope"></i>
              <span className="menuText">ERX 2</span>
            </Link>
          </li>
          <li>
            <Link to="/" style={{ textDecoration: "none" }}>
              <i className="bx bx-home-circle"></i>
              <span className="menuText">ERX 3</span>
            </Link>
          </li>

         
        </ul>
      </div>
     
    </>
  );
};

export default SidebarContent;
