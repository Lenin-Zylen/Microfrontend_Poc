import React from "react";
import "./LabelPill.scss";
import PropTypes from "prop-types";

const LabelPill = ({ name, pillClose, size, variant = "default" }) => {
  return (
    <>
      <label
        className={`label-pill pill-${variant} ${size ? `pill-${size}` : ""}  `}
      >
        {size === "md" && pillClose === "left" ? (
          <i className="fa fa-times"></i>
        ) : (
          ""
        )}
        {name}
        {size === "md" && pillClose !== "left" ? (
          <i className="fa fa-times"></i>
        ) : (
          ""
        )}
      </label>
    </>
  );
};

LabelPill.propTypes = {
  name: PropTypes.string,
  pillClose: PropTypes.oneOf([PropTypes.string, "left", "right"]),
  size: PropTypes.oneOf([PropTypes.string, "md", "sm"]),
  variant: PropTypes.oneOf([
    PropTypes.string,
    "default",
    "primary",
    "success",
    "danger",
    "warning",
    "info",
  ]),
};

export default LabelPill;
