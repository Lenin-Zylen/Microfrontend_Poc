import React, { useRef, useEffect } from "react";
import "./global-nav.scss";
import { CgMenuGridR } from "react-icons/cg";
import { FaHospitalUser, FaCashRegister } from "react-icons/fa";
import { SiCivicrm } from "react-icons/si";
import { VscSortPrecedence } from "react-icons/vsc";
import { MdOutlinePointOfSale, MdOutlineComputer } from "react-icons/md";
import { GiTooth } from "react-icons/gi";
import { AiOutlinePartition, AiOutlineFileSearch } from "react-icons/ai";
import { RiCustomerService2Fill, RiAdminFill } from "react-icons/ri";
import { TiBusinessCard } from "react-icons/ti";
import { get } from "lodash";
// Hook
function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

const GlobalNavigation = ({ setOpen }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const subscription = ['RCM', "ERX"];

  const wrapperRef = useRef();
  useOnClickOutside(wrapperRef, () => setOpen(false));
  return (
    <div className="global-nav" ref={wrapperRef}>
      <CgMenuGridR className="launcher-menu" onClick={() => setOpen(false)} />
      <div className="main-apps">
        <h6>Products</h6>
        <div className="product-list">
          <div className="product-list-left">
            {subscription.includes("PE") && (
              <a href="/patient">
                <div className="product-item">
                  <FaHospitalUser
                    className="product-icon"
                    style={{ color: "#408E91" }}
                  />{" "}
                  <span>PATIENT ENGAGEMENT</span>
                </div>
              </a>
            )}

            {subscription.includes("RCM") && (
              <a href="/rcm">
                <div className="product-item">
                  <FaCashRegister
                    className="product-icon"
                    style={{ color: "#19A7CE" }}
                  />{" "}
                  <span>RCM</span>
                </div>
              </a>
            )}

            {subscription.includes("ERX") && (
              <a href="/erx">
                <div className="product-item">
                  <AiOutlineFileSearch
                    className="product-icon"
                    style={{ color: "#BBD6B8" }}
                  />{" "}
                  <span>ERX</span>
                </div>
              </a>
            )}

            {subscription.includes("CIS") && (
              <a href="/cis">
                <div className="product-item">
                  <VscSortPrecedence
                    className="product-icon"
                    style={{ color: "#EA5455" }}
                  />{" "}
                  <span>CIS</span>
                </div>
              </a>
            )}

            {subscription.includes("VOIP") && (
              <a href="/voip">
                <div className="product-item">
                  <MdOutlinePointOfSale
                    className="product-icon"
                    style={{ color: "#66347F" }}
                  />{" "}
                  <span>VOIP</span>
                </div>
              </a>
            )}

            {subscription.includes("SERVICE_DESK") && (
              <a href="/service-desk">
                <div className="product-item">
                  <RiCustomerService2Fill
                    className="product-icon"
                    style={{ color: "#E7B10A" }}
                  />{" "}
                  <span>SERVICE DESK</span>
                </div>
              </a>
            )}
          </div>

          <div className="product-list-right">
            {subscription.includes("CRM") && (
              <a href="/crm">
                <div className="product-item">
                  <SiCivicrm
                    className="product-icon"
                    style={{ color: "#865DFF" }}
                  />{" "}
                  <span>CRM</span>
                </div>
              </a>
            )}

            {subscription.includes("PMS") && (
              <a href="/open-dental">
                <div className="product-item">
                  <RiAdminFill
                    className="product-icon"
                    style={{ color: "#E90064" }}
                  />{" "}
                  <span>PMS</span>
                </div>
              </a>
            )}

            {subscription.includes("EV") && (
              <a href="/ev">
                <div className="product-item">
                  <MdOutlineComputer
                    className="product-icon"
                    style={{ color: "#537FE7" }}
                  />{" "}
                  <span>EV</span>
                </div>
              </a>
            )}

            {subscription.includes("PACS") && (
              <a href="/pacs">
                <div className="product-item">
                  <GiTooth
                    className="product-icon"
                    style={{ color: "#FFAACF" }}
                  />{" "}
                  <span>PACS</span>
                </div>
              </a>
            )}

            {subscription.includes("AI") && (
              <a href="/ai">
                <div className="product-item">
                  <AiOutlinePartition
                    className="product-icon"
                    style={{ color: "#AEE2FF" }}
                  />{" "}
                  <span>AI</span>
                </div>
              </a>
            )}

            {subscription.includes("BI") && (
              <a href="/bi">
                <div className="product-item">
                  <TiBusinessCard
                    className="product-icon"
                    style={{ color: "#00425A" }}
                  />{" "}
                  <span>BI</span>
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalNavigation;
