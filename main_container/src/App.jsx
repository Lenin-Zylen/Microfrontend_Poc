import { useState } from "react";
// import "./App.css";
import "./assets/sass/main.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./routes/Routing";
import { createBrowserHistory } from "history";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
const defaultHistory = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={defaultHistory}>
        <Routing />
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
