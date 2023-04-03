import React, { useState } from "react";
import "./header.scss";
import ProfileMenu from "../ProfileMenu";
import { CgMenuGridR } from "react-icons/cg";
import GlobalNavigation from "../GlobalNavigation";

const Header = ({ handleMobileMenu }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="header shadow-sm ">
      {open && <GlobalNavigation setOpen={setOpen} />}
      <div className="header-container w-full">
        <div className="header-row  w-full flex flex-wrap w-full">
          <div className="flex items-center">
            <div className="launcher-menu-container">
              <CgMenuGridR
                className="launcher-menu"
                onClick={() => setOpen(!open)}
              />
            </div>

            <a href="/login">
              <h2 className="header-logo-text">Genyus</h2>
            </a>
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
