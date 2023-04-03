import React from "react";
import PropTypes from "prop-types";
import "./Heading.scss";
const Headings = ({ styleName, name }) => {
  return <div className={styleName}>{name}</div>;
};
Headings.propTypes = {
  name: PropTypes.string,
  styleName: PropTypes.oneOf([
    PropTypes.string,
    "heading-1",
    "heading-2",
    "heading-3",
    "heading-4",
    "heading-5",
    "sub-heading-1",
    "sub-heading-2",
    "sub-heading-3",
    "sub-heading-4",
    "sub-heading-5",
    "sub-heading-6",
  ]),
};
export default Headings;
