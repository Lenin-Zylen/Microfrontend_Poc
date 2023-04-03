import React from "react";
import "./breadcrumbs.scss";
import { Row, Col } from "reactstrap";
const BreadCrumbs = (props) => {
  return (
    <Row className="p-0 m-0">
      <Col lg={12} xs={12} className="p-0 m-0">
        <div className="breadcrumbs">
          <i className="fa fa-home" aria-hidden="true"></i>
          <span>/ Administration</span> <span>/ Master</span>
          <span className="active">/ Location Setup</span>
        </div>
      </Col>
    </Row>
  );
};

export default BreadCrumbs;
