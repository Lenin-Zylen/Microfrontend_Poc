import { useState, Suspense } from "react";
// import "./App.css";
import "./assets/sass/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { createBrowserHistory } from "history";
import Layout from "./components/Layout";
import "react-toastify/dist/ReactToastify.css";

const defaultHistory = createBrowserHistory();

function App() {
  return (
    <Router history={defaultHistory}>
      <Suspense fallback={<div className="spinner-container"></div>}>
        <Routes>
          <Route path="*" exact element={<Layout />} />
        </Routes>
        <ToastContainer />
      </Suspense>
    </Router>
  );
}

export default App;
