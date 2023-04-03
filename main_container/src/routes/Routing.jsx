import React from "react";
import { Routes, Route } from "react-router-dom";
import RcmFrontend from "../pages/RcmFrontend";
import ErxFrontend from "../pages/ErxFrontend";
import Login from "../pages/Auth/Login";
import Dashboard from "../pages/Dashboard";
import TBHFrontend from "../pages/TBHFrontend";
import UserRegister from '../pages/Auth/Register';

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/rcm" element={<RcmFrontend />} />
      <Route path="/erx" element={<ErxFrontend />} />
      <Route path="/patient" element={<TBHFrontend />} />
      <Route path="/cis" element={<TBHFrontend />} />
      <Route path="/crm" element={<TBHFrontend />} />
      <Route path="/ev" element={<TBHFrontend />} />
      <Route path="/pacs" element={<TBHFrontend />} />
      <Route path="/voip" element={<TBHFrontend />} />
      <Route path="/service-desk" element={<TBHFrontend />} />
      <Route path="/bi" element={<TBHFrontend />} />
      <Route path="/ai" element={<TBHFrontend />} />
      <Route path="/pms" element={<TBHFrontend />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/user-register" element={<UserRegister />} />
      <Route path="/user-edit" element={<UserRegister />} />
    </Routes>
  );
};

export default Routing;
