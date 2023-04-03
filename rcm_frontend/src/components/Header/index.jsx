import React from "react";
import "./header.scss";
// import { Container, Col, Row } from "reactstrap";
import ProfileMenu from "../ProfileMenu";
const Header = ({handleMobileMenu}) => {
  return (
    <div className="header shadow ">
      <div  className="header-container w-full">
        <div className="header-row w-full flex flex-wrap w-full">
          <div className="flex items-center">
            <h2 className="header-logo-text"> Genyus</h2>
            <div className="header-icon" onClick={handleMobileMenu}>
              <i className="bx bx-menu"></i>
            </div>
          </div>

          <div className="ml-auto">
            <div className="header-profile">
              <ProfileMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
