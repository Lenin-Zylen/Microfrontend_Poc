import React from "react";
import PropTypes from "prop-types";
import "./BodyText.scss";
const BodyText = ({ styleName, name }) => {
  return <p className={styleName}>{name}</p>;
};

BodyText.propTypes = {
  name: PropTypes.string,
  styleName: PropTypes.oneOf([PropTypes.string, "text-1", "text-2", "text-3"]),
};
export default BodyText;
