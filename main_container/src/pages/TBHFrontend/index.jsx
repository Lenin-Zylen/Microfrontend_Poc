import React, { useEffect, useState } from "react";
import MicroFrontend from "../../MicroFrontend";

import { createBrowserHistory } from "history";
import Layout from "../../components/Layout";
const defaultHistory = createBrowserHistory();

const TBHFrontend = () => {
  const rcmHost = import.meta.env.VITE_APP_TBH_HOST;

  function RcmModule({ history }) {
    return <MicroFrontend history={history} host={rcmHost} name="tbh" />;
  }

  return (
    <Layout>
      <div id="tbh">
        <div>
          <RcmModule history={defaultHistory} />
        </div>
      </div>
    </Layout>
  );
};

export default TBHFrontend;
