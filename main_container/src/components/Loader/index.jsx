import React from "react";
import LoaderGif from "../../assets/images/spin.gif";
const Loader = () => {
  return (
    <div
      className="w-100 d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <img src={LoaderGif} alt="loader" />
    </div>
  );
};

export default Loader;
