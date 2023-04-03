import React from "react";
import MicroFrontend from "../../MicroFrontend";

import { createBrowserHistory } from "history";
import Layout from "../../components/Layout";
const defaultHistory = createBrowserHistory();

const RcmFrontend = () => {
  const rcmHost = import.meta.env.VITE_APP_RCM_HOST;

  function RcmModule({ history }) {
    return <MicroFrontend history={history} host={rcmHost} name="rcm" />;
  }
  return (
    <Layout>
      <div id="rcm">
        <div>
          <RcmModule history={defaultHistory} />
        </div>
      </div>
    </Layout>
  );
};

export default RcmFrontend;
