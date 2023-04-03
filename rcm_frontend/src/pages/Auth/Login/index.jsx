import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.scss";
import chatIcon from "../../../assets/images/chat_icon.9e21b99405fc8b5663bcdad3860c333b.svg";

const Login = () => {
  const [regPassword, setRegPassword] = useState("password");
  const [eye, seteye] = useState(true);
  const [userData, setUserData] = useState({
    userName: "genyusitechindia@gmail.com",
    password: "",
  });
  const handleChange = (e) => {
    setUserData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  
  };
  const EyeClick = () => {
    if (regPassword === "password") {
      setRegPassword("text");
      seteye(false);
    } else {
      setRegPassword("password");
      seteye(true);
    }
  };
  return (
    <>
      <div className="container-fluid vh-100">
        <div className="row h-100">
          <div className="col-12  col-lg-6 form-col ">
            <div className="d-flex flex-wrap h-100 ">
              <div className="w-100">
                <p className="gName w-100"> g </p>
                <p className="gName w-100" style={{ fontSize: "2.5rem" }}>
                  {" "}
                  Main Container{" "}
                </p>
                <div className="welcomeText mb-2">
                  Welcome back <br /> to <span className="">Genyus</span>
                </div>
                <div className="h6 mt-5 mb-3  w-100">
                  Sign in to your account below
                </div>
                <form
                  id="login-form-step-2"
                  className="publicform"
                  onSubmit={handleSubmit}
                >
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control custom-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                      name="userName"
                      value={userData.userName}
                      onChange={handleChange}
                    />
                    <label htmlFor="floatingInput">Email address*</label>
                  </div>
                  <div className=" mb-3 ">
                    <div className="form-floating position-relative ">
                      <input
                        type={regPassword}
                        name="password"
                        className="form-control custom-control"
                        id="floatingPassword"
                        placeholder="Password"
                        onChange={handleChange}
                      />
                      <label htmlFor="floatingPassword">Password*</label>
                      <span className="showIcon">
                        <i
                          onClick={EyeClick}
                          className={`fa ${eye ? "fa-eye-slash" : "fa-eye"}`}
                        ></i>
                      </span>
                    </div>
                  </div>

                  <div className="col-12 mb-3">
                    <label className="form-check-label">
                      <Link className="jss3">Forgot password</Link>
                    </label>
                  </div>

                  <div className="col-12 mb-3">
                    <div className="form-check ">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="gridCheck"
                      />
                      <label className="form-check-label" htmlFor="gridCheck">
                        I agree to the <Link>Terms & Conditions</Link> and{" "}
                        <Link>Privacy Policy</Link>
                      </label>
                    </div>
                  </div>

                  <div className="col-12 mb-3">
                    <button
                      type="submit"
                      className="btn btn-primary text-white px-4 rounded-1"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
              {/* <div className="align-self-end">
                <div className="supportText  my-4">
                  <span className="me-2">Any issues? Please, contact</span>
                  <div className="d-flex align-items-center">
                    <Link className="me-2">support@genyus.dev</Link>
                    <div className="chatImage">
                      <img
                        className="chatIconImage"
                        src={chatIcon}
                        alt="Chat"
                      />
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="col-12  col-lg-6 signBackground">&nbsp;</div>
        </div>
      </div>
    </>
  );
};

export default Login;
