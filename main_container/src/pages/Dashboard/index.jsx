import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import moment from "moment/moment";
import { getAllUsers, deleteUser } from "../../apis";
import DataTable from "react-data-table-component";
import "./dashboard.scss";
import { Link, useNavigate } from "react-router-dom";
import DeleteModal from "../../components/DeleteModal";
import { toast } from "react-toastify";

const Dashboard = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [deleteId, setDeleteId] = useState("");
  const [showModal, setShowModal] = useState(false);

  const fetchData = async () => {
    const res = await getAllUsers();
    setUsers(res);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const column = [
    {
      name: "No.",
      sortable: true,
      cell: (cellProps, index) => {
        return <b>{index + 1}</b>;
      },
    },
    {
      name: "First Name",
      selector: (row) => row.firstName,
      sortable: true,
    },
    {
      name: "Last Name",
      selector: (row) => row.lastName,
      sortable: true,
    },

    {
      name: "Last Modified",
      selector: (row) => row.modifiedAt,
      sortable: true,
      cell: (cellProps, index) => {
        return (
          <span>
            {moment(cellProps.modifiedAt).format("MMMM DD, YYYY hh:mm A")}
          </span>
        );
      },
    },

    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },

    {
      name: "Subcription",
      selector: (row) => row.subscription,
      sortable: true,
      cell: (cellProps) => {
        return (
          <div className="subscription-block">
            {cellProps.subscription?.map((item) => {
              return <span className="subscription-packs"> {item}</span>;
            })}
          </div>
        );
      },
    },

    {
      name: "Action",
      selector: (row) => row.subscription,
      sortable: true,
      cell: (cellProps) => {
        return (
          <div className="">
            {cellProps.firstName !== "Admin" && (
              <>
                <i
                  className="fa fa-edit"
                  onClick={() => navigate("/user-edit", { state: cellProps })}
                ></i>
                <i
                  className="fa fa-trash"
                  onClick={() => {
                    handleShowModal(cellProps.id);
                    setDeleteId(cellProps.id);
                  }}
                ></i>
              </>
            )}
          </div>
        );
      },
    },
  ];

  const onDelete = () => {
    deleteUser(callback, deleteId);
  };

  const handleShowModal = (id) => {
    setShowModal(!showModal);
  };

  const callback = (data) => {
    if (data.status === 200) {
      toast.success(data.message);
      handleShowModal();
      fetchData();
    }
  };

  return (
    <Layout>
      <section className="m-4">
        <h6> Welcome Back !</h6>
        <div class="lg:flex lg:items-center lg:justify-between">
          <div class="min-w-0 flex-1">
            <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
              Super Admin
            </h2>
            <div class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
              <div class="mt-2 flex items-center text-sm text-gray-500">
                <svg
                  class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 016 4.193V3.75zm6.5 0v.325a41.622 41.622 0 00-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zM10 10a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V11a1 1 0 00-1-1H10z"
                    clip-rule="evenodd"
                  />
                  <path d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 01-9.274 0C3.985 17.585 3 16.402 3 15.055z" />
                </svg>
                Full-Access
              </div>
              <div class="mt-2 flex items-center text-sm text-gray-500">
                <svg
                  class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                    clip-rule="evenodd"
                  />
                </svg>
                USA
              </div>

              <div class="mt-2 flex items-center text-sm text-gray-500">
                <svg
                  class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
                    clip-rule="evenodd"
                  />
                </svg>
                {moment().format("MMMM DD, YYYY")}
              </div>
            </div>
          </div>
          <div class="mt-5 flex lg:mt-0 lg:ml-4">
            <span class="sm:ml-3">
              <Link to="/user-register">
                <button
                  type="button"
                  class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  <svg
                    class="-ml-0.5 mr-1.5 h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Add User
                </button>
              </Link>
            </span>
          </div>
        </div>
      </section>

      <section className="m-1 subscription">
        <DataTable data={users} columns={column} pagination />
      </section>
      {showModal ? (
        <DeleteModal handleShowModal={handleShowModal} onDelete={onDelete} />
      ) : (
        ""
      )}
    </Layout>
  );
};

export default Dashboard;
