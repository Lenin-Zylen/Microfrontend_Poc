import React, { useEffect, useState } from "react";
// import { Card, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  CREATE_APPOINTMENTS,
  EDIT_APPOINTMENTS_DATA,
} from "../../../redux/Types";
import moment from "moment";
import { useNavigate } from "react-router";
import { Input } from "@material-tailwind/react";

const CreateAppointment = () => {
  const appointmentEditData = useSelector(
    (state) => state.appointment.appointmentEditData
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [appointment, setAppointment] = useState({
    start: "",
    end: "",
    description: "",
    
  });

  const handleChange = (e) => {
    setAppointment((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!appointment._id) {
      dispatch({ type: CREATE_APPOINTMENTS, payload: appointment });
    } else {
      dispatch({ type: EDIT_APPOINTMENTS_DATA, payload: appointment });
    }
  };

  useEffect(() => {
    if (appointmentEditData._id) {
      setAppointment({
        ...appointmentEditData,
        start: moment(appointmentEditData.start).format("MM/DD/YYYY"),
        end: moment(appointmentEditData.end).format("MM/DD/YYYY"),
      });
    }
  }, [appointmentEditData]);

  return (
    <div className="p-4">
      <div>
        <div className="p-0">
          <div
            as="h5"
            className="w-full p-3 border border-gray-200 bg-gray-50 rounded-t-md dark:border-gray-600 dark:bg-gray-700"
          >
            Make Appointment{" "}
          </div>

          <form
            className="flex bg-white border-gray-200 border code-preview w-full py-3"
            onSubmit={handleFormSubmit}
          >
            <div className="flex flex-wrap w-full">
              <div className="p-3 w-1/3">
                <input
                  type="text"
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:border-gray-500 block w-full p-2.5  "
                  name="start"
                  onChange={handleChange}
                  placeholder="Start Date"
                  value={appointment.start ? appointment.start : ""}
                />
              </div>
              <div className="p-3  w-1/3">
                <input
                  type="text"
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:border-gray-500 block w-full p-2.5  "
                  name="end"
                  onChange={handleChange}
                  placeholder="End Date"
                  value={appointment.end ? appointment.end : ""}
                />
              </div>
              <div className="p-3  w-1/3">
                <input
                  type="text"
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:border-gray-500 block w-full p-2.5  "
                  name="description"
                  onChange={handleChange}
                  placeholder="Description"
                  value={appointment.description}
                />
              </div>
              <div className="p-3  w-full">
                <button
                  type="submit"
                  className="text-white bg-teal-600 hover:bg-teal-700  focus:outline-none  font-medium rounded-md text-sm w-auto  px-4 py-2 text-center mr-3 "
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="text-gray-800 bg-gray-100 hover:bg-gray-200  focus:outline-none  font-medium rounded-md text-sm w-auto  px-4 py-2 text-center "
                  onClick={() => navigate("/erx")}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAppointment;
