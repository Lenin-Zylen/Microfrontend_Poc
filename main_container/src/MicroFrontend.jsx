import React, { useEffect, useState } from "react";
import Loader from "./components/Loader";
const MicroFrontend = (props) => {
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(false);
  const renderMicroFrontend = () => {
    const { name, window, history } = props;

    window[`createRoot${name}`] &&
      window[`createRoot${name}`](`${name}-container`, history);
  };

  useEffect(() => {
    const { name, host, document } = props;
    const scriptId = `micro-frontend-script-${name}`;
    const cssLinkId = `micro-frontend-css-${name}`;
    if (document.getElementById(scriptId)) {
      renderMicroFrontend();
      return;
    }

    fetch(`${host}/asset-manifest.json`)
      .then((res) => res.json())
      .then(
        (manifest) => {
          const script = document.createElement("script");
          script.id = scriptId;
          script.crossOrigin = "cors";
          script.src = `${host}${manifest["files"]["main.js"]}`;
          script.onload = renderMicroFrontend();
          document.head.appendChild(script);

          const css = document.createElement("link");
          css.id = cssLinkId;
          css.rel = "stylesheet";
          css.crossOrigin = "cors";
          css.href = `${host}${manifest["files"]["main.css"]}`;
          css.onload = renderMicroFrontend();
          document.head.appendChild(css);
          setLoader(false);
        },
        (error) => {
          setError(true);
          console.error(error, "error");
          setLoader(false);
        }
      );

    return () => {
      const { name, window } = props;
      window[`unmount${name}`] && window[`unmount${name}`](`${name}-container`);
    };
  }, []);

  return (
    <>
      {loader ? (
        <>
          <Loader />{" "}
        </>
      ) : error ? (
        <>
          <div className="component-danger">
            Requested module is not available right now, please try later
          </div>
        </>
      ) : (
        <main id={`${props.name}-container`} />
      )}
    </>
  );
};

MicroFrontend.defaultProps = {
  document,
  window,
};

export default MicroFrontend;
