import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./login.scss";
import chatIcon from "../../../assets/images/chat_icon.9e21b99405fc8b5663bcdad3860c333b.svg";
import InputField from "../../../components/InputField";
import { loginUser } from "../../../apis";
import Loader from "../../../components/Loader";
import { toast } from "react-toastify";
import { globalMenu } from "../../../constants/menu";
import { isEmpty } from "lodash";

const Login = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState();
  const [regPassword, setRegPassword] = useState("password");
  const [eye, seteye] = useState(true);
  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const [fieldError, setfieldError] = useState({
    userName: "",
    email: "",
  });

  const [userData, setUserData] = useState({
    userName: "admin@admin.com",
    password: "admin123",
  });
  function isValidEmail(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  }

  const getPath = (permissions) => {
    const resultArray = [];

    globalMenu.forEach((item) => {
      if (permissions.includes(item.permission)) {
        resultArray.push(item);
      }
    });

    return resultArray[0];
  };

  const handleChange = (e) => {
    setUserData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
    validateInput(e);
  };
  const validateInput = (e) => {
    let { name, value } = e.target;
    setfieldError((prev) => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "userName":
          if (!value) {
            stateObj[name] = "Please enter email";
          } else if (!isValidEmail(value)) {
            stateObj[name] = "Please enter correct email";
          }
          break;
        case "password":
          if (!value) {
            stateObj[name] = "Please enter password";
          }
          break;
        default:
          break;
      }

      return stateObj;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard")
    // setLoader(true);
    // if (userData.userName === "" || userData.password === "") {
    //   setError("Please fill the mandatory filed");

    //   return;
    // } else {
    //   const values = {
    //     email: userData.userName,
    //     password: userData.password,
    //   };

    //   loginUser(callback, values);
    // }
  };

  const callback = (data) => {
    setData(data.user);
    toast.success(data.message);
    setLoader(false);
    setLogin(true);
    if (data.message == "User logged in successfully") {
      if (data?.user.userType === "client") {
        const path = !isEmpty(data) && getPath(data?.user.subscription);
        window.location.replace(path.path);
      } else {
        window.location.href = "/dashboard";
      }
    }
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
  useEffect(() => {
    if (!loader) {
    }
  }, [loader]);

  return (
    <>
      {loader && !login ? <Loader /> : ""}
      {login && !loader ? (
        ""
      ) : (
        <div className="container-fluid vh-100">
          <div className="row h-100">
            <div className="col-12  col-lg-6 form-col ">
              <div className="d-flex flex-wrap h-100 ">
                <div className="w-100">
                  <p className="gName w-100">
                    {" "}
                    g <span className="gNameSub"> Main Container</span>
                  </p>
                  <div className="welcomeText mb-2">
                    Welcome back <br /> to{" "}
                    <a href="/login">
                      <span className="">Genyus</span>
                    </a>
                  </div>
                  <div className="h6 mt-5 mb-4 w-100">
                    Sign in to your account below
                  </div>
                  <form
                    id="login-form-step-2"
                    className="publicform"
                    onSubmit={handleSubmit}
                  >
                    <div className="input-field position-relative mb-3">
                      <InputField
                        type="email"
                        name="userName"
                        className="custom-control"
                        value={userData.userName}
                        onChange={handleChange}
                        label={[
                          <>
                            email <strong style={{ color: "red" }}>*</strong>
                          </>,
                        ]}
                      />

                      <span className="err text-danger">
                        {fieldError.userName ||
                          (error && userData.userName == "" && (
                            <>{error || fieldError.userName}</>
                          ))}
                      </span>
                    </div>

                    <div className=" mb-3 ">
                      <div className="input-field position-relative ">
                        <InputField
                          className="custom-control"
                          name="password"
                          type={regPassword}
                          onChange={handleChange}
                          value={userData.password}
                          label={[
                            <>
                              Password{" "}
                              <strong style={{ color: "red" }}>*</strong>
                            </>,
                          ]}
                        />

                        <span className="showIcon">
                          <i
                            onClick={EyeClick}
                            className={`fa ${eye ? "fa-eye-slash" : "fa-eye"}`}
                          ></i>
                        </span>
                      </div>
                      <span className="err text-danger">
                        {fieldError.password ||
                          (error && userData.password == "" && (
                            <>{error || fieldError.password}</>
                          ))}
                      </span>
                    </div>

                    <div className="col-12 mb-3">
                      <label className="form-check-label">
                        <a href={"/rcm"} className="jss3">
                          Forgot password
                        </a>
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
                          Remember me
                        </label>
                      </div>
                    </div>

                    <div className="col-12 mb-3 d-flex">
                      {/* <Link to="/add-location/location-general"> */}
                      <button
                        type="submit"
                        className="btn btn-theme text-white px-4 rounded-1 -1"
                      >
                        Sign In
                      </button>
                      <div className="m-1">
                      </div>
                    </div>
                  </form>
                </div>
                <div className="align-self-end">
                  <div className="supportText  my-4">
                    <span className="me-2">Any issues? Please, contact</span>
                    <div className="d-flex align-items-center">
                      <a href={"/erx"} className="me-2">
                        support@genyus.dev
                      </a>
                      <div className="chatImage">
                        <a href="/dashboard">
                          <img
                            className="chatIconImage"
                            src={chatIcon}
                            alt="Chat"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12  col-lg-6 signBackground">&nbsp;</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
