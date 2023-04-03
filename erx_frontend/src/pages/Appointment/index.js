import React, { useEffect, useState, useMemo } from "react";
// import { Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { EDIT_APPOINTMENTS, GET_ALL_APPOINTMENTS } from "../../redux/Types";
import TableContainer from "../../components/TableContainer";
import { resetAppointmentSlice } from "../../redux/Action/appointmentAction";
import moment from "moment";
import DeleteModal from "../../components/DeleteModal";

const ListAppointment = () => {
  const appointment = useSelector(
    (state) => state?.appointment?.appointmentData
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: GET_ALL_APPOINTMENTS });
  }, []);

  const onEditClick = (item) => {
    dispatch({ type: EDIT_APPOINTMENTS, payload: item });
    navigate("/appointment-create");
  };
  const [show, setShow] = useState(false);

  const handleShowModal = (id) => {
    setShow(!show);
  };

  const columns = useMemo(
    () => [
      {
        name: "Start Date",
        selector: (row) => row.start,
        sortable: true,
        cell: (cellProps) => {
          return <div>{moment(cellProps?.start).format("MM/DD/YYYY")}</div>;
        },
      },
      {
        name: "End Date",
        selector: (row) => row.end,
        sortable: true,
        cell: (cellProps) => {
          return <div>{moment(cellProps?.end).format("MM/DD/YYYY")}</div>;
        },
      },
      {
        name: "Description",
        selector: (row) => row.description,
        sortable: true,
      },
      {
        name: "Actions",
        cell: (cellProps) => {
          //  console.log(cellProps)
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
    <>
      <div className="p-2 flex flex-wrap">
        <h5 className="mb-4 w-full p-3 bg-gray-200 color-white">ERX Dashboard</h5>

        <div className="flex flex-wrap justify-between w-full">
          <div className="text-xl font-bold">
            <h6>Appointment Module</h6>
          </div>
          <button
            className="text-white bg-teal-600 hover:bg-teal-700  focus:outline-none  font-medium rounded-md text-sm w-auto  px-4 py-2 text-center mb-3 ml-auto"
            onClick={() => {
              dispatch(resetAppointmentSlice());
              navigate("/appointment-create");
            }}
          >
            Create Appointment
          </button>
        </div>

        <div className="p-0 w-full">
          <div
            as="h5"
            className="w-full p-3 border border-gray-200 bg-gray-50 rounded-t-md dark:border-gray-600 dark:bg-gray-700"
          >
            Appointment List{" "}
          </div>
          <div className="flex p-0 bg-white border-gray-200 border code-preview w-full">
            <div className="block w-full">
              <TableContainer data={appointment} columns={columns} />
            </div>
          </div>
        </div>
      </div>

      {show ? <DeleteModal handleShowModal={handleShowModal} /> : ""}
    </>
  );
};

export default ListAppointment;
