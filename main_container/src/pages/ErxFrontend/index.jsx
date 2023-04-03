import React from "react";
import MicroFrontend from "../../MicroFrontend";

import { createBrowserHistory } from "history";
import Layout from "../../components/Layout";
const defaultHistory = createBrowserHistory();

const ErxFrontend = () => {
  const erxHost = import.meta.env.VITE_APP_ERX_HOST;

  function ErxModule({ history }) {
    return <MicroFrontend history={history} host={erxHost} name="erx" />;
  }

  return (
    <Layout>
      <div id="erx">
        <div>
          <ErxModule history={defaultHistory} />
        </div>
      </div>
    </Layout>
  );
};

export default ErxFrontend;
