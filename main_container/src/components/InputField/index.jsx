import React from "react";
import "./input-field.scss";

const InputField = (props) => {
  return (
    // <!-- Email input -->
    <div className="input-field ">
      <div className="login-box">
        <div className="group">
          <input
            type={props.type}
            required="required"
            name={props.name}
            onChange={props.onChange}
            value={props.value}
            className={props.className || (props.disabled && "disabled")}
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>{props.label}</label>
          {/* <i><img src="images/email-icon-32.png" alt="" /></i> */}
        </div>
      </div>
    </div>
  );
};

export default InputField;
