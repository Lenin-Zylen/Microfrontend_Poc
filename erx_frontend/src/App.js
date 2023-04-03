import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createBrowserHistory } from "history";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./assets/sass/main.scss";
import Layout from "./components/Layout";

const defaultHistory = createBrowserHistory();

const App = () => {
  return (
    <>
      <Router history={defaultHistory}>
        <Suspense fallback={<div className="spinner-container"></div>}>
          <Routes>
            <Route path="*" element={<Layout />} />
            
          </Routes>
          <ToastContainer />
        </Suspense>
      </Router>
    </>
  );
};

export default App;


