import Dashboard from "../pages/Dashboard";
import CreatePatient from "../pages/Patient/CreatePatient";


const Routing = [
  { path: "/", name: "Dashboard", exact: true, element: Dashboard },
  { path: "/rcm", name: "Dashboard", exact: true, element: Dashboard },

  {
    path: "/patient-create",
    name: "CreatePatient",
    exact: true,
    element: CreatePatient,
  },
];

export default Routing;
