import React, { useEffect, useState, useMemo } from "react";
// import { Card, Col, Row, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getAllPatientsSlice,
  patientResetDataSlice,
} from "../../redux/Action/patientsAction";
import { EDIT_PATIENTS, GET_ALL_PATIENTS } from "../../redux/Types";

import TableContainer from "../../components/TableContainer";
// import moment from "moment/moment";
import DeleteModal from "../../components/DeleteModal";
const Dashboard = () => {
  const patients = useSelector((state) => state?.patients?.patientsData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    dispatch({ type: GET_ALL_PATIENTS });
  }, []);

  const handlePatient = () => {
    // alert("fsjhfj")
    dispatch(patientResetDataSlice());
    navigate("/patient-create");
  };
  const onEditClick = (item) => {
    dispatch({ type: EDIT_PATIENTS, payload: item });
    navigate("/patient-create");
  };

  const handleShowModal = (id) => {
    setShowModal(!showModal);
  };

  const columns = useMemo(
    () => [
      {
        name: "First Name",
        selector: (row) => row.firstname,
        sortable: true,
      },
      {
        name: "Last Name",
        selector: (row) => row.lastname,
        sortable: true,
      },
      {
        name: "SSN",
        selector: (row) => row.ss,
        sortable: true,
      },
      {
        name: "Mobile Number",
        selector: (row) => row.personalMobile,
        sortable: true,
      },
      {
        name: "Email",
        selector: (row) => row.email,
        sortable: true,
      },
      {
        name: "City",
        selector: (row) => row.city,
        sortable: true,
      },
      {
        name: "State",
        selector: (row) => row.state,
        sortable: true,
      },
      {
        name: "Created Date",
        selector: (row) => row.createdDate,
        sortable: true,
      },

      {
        name: "Actions",
        cell: (cellProps) => {
          return (
            <>
              <button
                className="text-gray-800 align-self-start bg-gray-100 hover:bg-gray-300 rounded-md text-sm w-auto py-1 px-2 mr-2"
                onClick={() => onEditClick(cellProps)}
              >
                <i className="bx bx-pencil" />
              </button>
              <button
                className="text-gray-800 align-self-start bg-gray-100 hover:bg-gray-300 rounded-md text-sm w-auto py-1 px-2 mr-2"
                onClick={() => handleShowModal(cellProps._id)}
              >
                <i className="bx bx-trash-alt" />
              </button>
            </>
          );
        },
      },
    ],
    []
  );

  return (
    <div className="p-2 flex flex-wrap">
      <h5 className="mb-4 w-full p-3 bg-gray-200 color-white">RCM Dashboard</h5>
      <div className="flex flex-wrap justify-between w-full">
        <div className="text-xl font-bold">
          <h6>Patient Module</h6>
        </div>
        <button
          className="text-white bg-teal-600 hover:bg-teal-700  focus:outline-none  font-medium rounded-md text-sm w-auto  px-4 py-2 text-center mb-3 ml-auto"
          onClick={handlePatient}
        >
          Add Patient
        </button>
      </div>
      <div className="p-0 w-full">
        <div
          as="h5"
          className="w-full p-3 border border-gray-200 bg-gray-50 rounded-t-md dark:border-gray-600 dark:bg-gray-700"
        >
          Patients List{" "}
        </div>
        <div className="flex p-0 bg-white border-gray-200 border code-preview w-full">
          <div className="block  w-full">
            <TableContainer data={patients} columns={columns} />
          </div>
        </div>
      </div>
      {showModal ? <DeleteModal handleShowModal={handleShowModal} /> : ""}
    </div>
  );
};

export default Dashboard;
