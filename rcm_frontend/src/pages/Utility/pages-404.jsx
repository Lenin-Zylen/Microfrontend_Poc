import React from "react";
import { Link } from "react-router-dom";
// import { Container, Row, Col } from "reactstrap";

//Import Images
import error from "../../assets/images/error-img.png";

const Pages404 = () => {
  //meta title
  document.title = "404 Error Page";

  return (
    <React.Fragment>
      <div className="account-pages my-5 pt-5">
        <div className="flex flex-wrap w-full">
          <div  className="flex flex-wrap w-full align-items-center">
              <div className="text-center mb-5 w-full">
                <h1 className="text-5xl ">
                  4<i className="bx bx-buoy bx-spin text-primary display-3" />4
                </h1>
                <h4 className="uppercase text-3xl">Sorry, page not found</h4>
                <div className="mt-5 text-center">
                  <Link className="btn btn-primary " to="/">
                    Back to Dashboard
                  </Link>
                </div>
              </div>
          </div>

            <div className="flex flex-wrap w-full items-center justify-center">
              <div className="w-6/12">
                <img src={error} alt="" className="img-fluid" />
              </div>
            </div>

        </div>
      </div>
    </React.Fragment>
  );
};

export default Pages404;

