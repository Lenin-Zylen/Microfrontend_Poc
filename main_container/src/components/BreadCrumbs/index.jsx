import React, { useEffect, useState } from "react";
import "./breadcrumbs.scss";
import { Row, Col } from "reactstrap";

const BreadCrumbs = ({ pathname }) => {
  const [name, setName] = useState("");
  const [subName, setSubName] = useState("");

  useEffect(() => {
    let pageName = pathname?.split("/").map((item) => {
      return item;
    });

    setName(
      pageName[1]
        ?.split("-")
        .map((item) => {
          return item.charAt(0).toUpperCase() + item.slice(1);
        })
        .join(" ")
    );
    setSubName(
      pageName[2]
        ?.split("-")
        .map((item) => {
          return item.charAt(0).toUpperCase() + item.slice(1);
        })
        .join(" ")
    );
  }, [pathname]);


  return (
    <Row className="p-0 m-0">
      <Col lg={12} xs={12} className="p-0 m-0">
        <div className="breadcrumbs">
          <i className="fa fa-home" aria-hidden="true"></i>
          <span>/ Administration</span> <span>/ Master</span>
          <span className="active">/{name}</span>
          {subName ? <span className="active">/{subName}</span> : ""}
        </div>
      </Col>
    </Row>
  );
};

export default BreadCrumbs;
