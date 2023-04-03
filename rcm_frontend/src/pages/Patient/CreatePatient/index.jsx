import React, { useState, useEffect } from "react";
// import { Card, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { CREATE_PATIENT } from "../../../redux/Types";
import { EDIT_PATENTS_DATA } from "../../../redux/Types";
import moment from "moment";

import { useNavigate } from "react-router-dom";


const CreatePatient = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const patientEditData = useSelector(
    (state) => state.patients.patientEditData
  );

  const [paitent, setPaitent] = useState({
    firstname: "",
    lastname: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    dateofbirth: "",
    email: "",
    gender: "",
    hearAboutUs: "",
    homePhone: "",
    married: "",
    personalMobile: "",
    ss: "",
    state: "",
    zipcode: "",
  });

  const handleChange = (e) => {
    setPaitent((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!paitent.id) {
      dispatch({ type: CREATE_PATIENT, payload: paitent });
      navigate("/");
    } else {
      dispatch({ type: EDIT_PATENTS_DATA, payload: paitent });
      navigate("/");
    }
  };
  useEffect(() => {
    if (patientEditData.dateofbirth) {
      setPaitent({
        ...patientEditData,
        dateofbirth: moment(patientEditData.dateofbirth).format("MM/DD/YYYY"),
      });
    }
  }, [patientEditData]);

  return (
    <div className="p-4">
     <div className=" border-1 border-gray-300 rounded-md">

        <div className="p-0">
          <h5 className="w-full p-3 border border-gray-200 bg-gray-50 rounded-t-md dark:border-gray-600 dark:bg-gray-700">Patient Details </h5>
          <form className="flex bg-white border-gray-200 border code-preview w-full py-3" onSubmit={handleFormSubmit}>
            <div className="flex flex-wrap">
              <div className="p-3  w-1/3">
                <input
                  type="text"
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:border-gray-500 block w-full p-2.5  "
                  name="firstname"
                  onChange={handleChange}
                  placeholder="First Name"
                  value={paitent.firstname}
                />
              </div>
              <div className="p-3 w-1/3">
                <input
                  type="text"
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:border-gray-500 block w-full p-2.5  "
                  name="lastname"
                  onChange={handleChange}
                  placeholder="Last Name"
                  value={paitent.lastname}
                />
              </div>
              <div className="p-3  pr-5 w-1/3">
                <input
                  type="text"
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:border-gray-500 block w-full p-2.5  "
                  name="addressLine1"
                  onChange={handleChange}
                  placeholder="Address Line 1"
                  value={paitent.addressLine1}
                />
              </div>
              <div className="p-3  w-1/3">
                <input
                  type="text"
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:border-gray-500 block w-full p-2.5  "
                  name="addressLine2"
                  onChange={handleChange}
                  placeholder="Address Line 2"
                  value={paitent.addressLine2}
                />
              </div>
              <div className="p-3  w-1/3">
                <input
                  type="text"
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:border-gray-500 block w-full p-2.5  "
                  name="city"
                  onChange={handleChange}
                  placeholder="City"
                  value={paitent.city}
                />
              </div>
              <div className="p-3  w-1/3">
                <input
                  type="text"
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:border-gray-500 block w-full p-2.5  "
                  name="dateofbirth"
                  onChange={handleChange}
                  placeholder="Date of Birth"
                  value={paitent.dateofbirth}
                />
              </div>
              <div className="p-3  w-1/3">
                <input
                  type="text"
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:border-gray-500 block w-full p-2.5  "
                  name="email"
                  onChange={handleChange}
                  placeholder="Email"
                  value={paitent.email}
                />
              </div>
              <div className="p-3  w-1/3 flex">
                <div className="mr-4">
                  <label>Gender</label>
                </div>
                <div className="mr-2">
                  <input
                    type="radio"
                    name="gender"
                    className="mr-1"
                    onChange={handleChange}
                    value={paitent.gender === "Male" ? paitent.gender : "Male"}
                    checked={paitent.gender === "Male"}
                  />
                  <label>Male</label>
                </div>
                <div className="mr-2">
                  <input
                    type="radio"
                    className="mr-1"
                    name="gender"
                    onChange={handleChange}
                    value={paitent.gender === "Female" ? paitent.gender : "Female"}
                    checked={paitent.gender === "Female"}
                  />
                  <label>Female</label>
                </div>
              </div>
              <div className="p-3  w-1/3">
                <input
                  type="text"
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:border-gray-500 block w-full p-2.5  "
                  name="hearAboutUs"
                  onChange={handleChange}
                  placeholder="Hear About Us"
                  value={paitent.hearAboutUs}
                />
              </div>
              <div className="p-3  w-1/3">
                <input
                  type="text"
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:border-gray-500 block w-full p-2.5  "
                  name="homePhone"
                  onChange={handleChange}
                  placeholder="Home Phone Number"
                  value={paitent.homePhone}
                />
              </div>
              <div className="p-3  w-1/3 flex">
                <div className="mr-4">
                  <label>Married? </label>
                </div>
                <div className="mr-2">
                  <input
                    type="radio"
                    className="mr-1"
                    name="married"
                    id="status1"
                    value={paitent.married == "Yes" ? paitent.married : "Yes"}
                    checked={paitent.married === "Yes"}
                    onChange={handleChange}
                  />
                  <label htmlFor="status1"> Yes</label>
                </div>

                <div className="mr-2">
                  <input
                    type="radio"
                    className="mr-1"
                    name="married"
                    id="status2"
                    value={paitent.married == "No" ? paitent.married : "No"}
                    checked={paitent.married === "No"}
                    onChange={handleChange}
                  />
                  <label htmlFor="status2"> No</label>
                </div>
              </div>
              <div className="p-3  w-1/3">
                <input
                  type="text"
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:border-gray-500 block w-full p-2.5  "
                  name="personalMobile"
                  onChange={handleChange}
                  placeholder="Personal Phone Number"
                  value={paitent.personalMobile}
                />
              </div>
              <div className="p-3  w-1/3">
                <input
                  type="text"
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:border-gray-500 block w-full p-2.5  "
                  name="ss"
                  onChange={handleChange}
                  placeholder="SS"
                  value={paitent.ss}
                />
              </div>
              <div className="p-3  w-1/3">
                <input
                  type="text"
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:border-gray-500 block w-full p-2.5  "
                  name="state"
                  onChange={handleChange}
                  placeholder="Enter State"
                  value={paitent.state}
                />
              </div>
              <div className="p-3  w-1/3">
                <input
                  type="text"
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:border-gray-500 block w-full p-2.5  "
                  name="zipcode"
                  onChange={handleChange}
                  placeholder="Enter Zip Code"
                  value={paitent.zipcode}
                />
              </div>
              <div className="p-3  w-full">
                <button type="submit"
                 className="text-white bg-teal-600 hover:bg-teal-700  focus:outline-none  font-medium rounded-md text-sm w-auto  px-4 py-2 text-center mr-3 "
                >Submit</button>
                <button 
                type="button" 
                className="text-gray-800 bg-gray-100 hover:bg-gray-200  focus:outline-none  font-medium rounded-md text-sm w-auto  px-4 py-2 text-center "
                onClick={()=> navigate(-1)}>Cancel</button>
              </div>



            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePatient;
