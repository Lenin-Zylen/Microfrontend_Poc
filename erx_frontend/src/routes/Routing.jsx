import React, { lazy } from "react";
import Dashboard from "../pages/Dashboard";
import Appointment from "../pages/Appointment";
import CreateAppointment from "../pages/Appointment/CreateAppointment";
import Pages404 from "../pages/Utility/pages-404";

const Routing = [
  // { path: "/", name: "Dashboard", exact: true, element: Dashboard },
  { path: "/", name: "Appointment", exact: true, element: Appointment },
  { path: "/erx", name: "Appointment", exact: true, element: Appointment },
  {
    path: "/appointment-create",
    name: "CreateAppointment",
    exact: true,
    element: CreateAppointment,
  },
  { path: "*", name: "Pages404", exact: true, element: Pages404 },
];

export default Routing;
