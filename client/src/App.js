import AppD from "./AppD";
import AppM from "./AppM";

import React from "react";
import Iframe from "react-iframe";
import "./AppD.css";

const App = () => {
  const resolution = window.innerWidth;
  const isMobile = resolution >= 320 && resolution <= 480;

  return (
    <div>
    <div>
      {isMobile ? (
        <React.Fragment>
          <AppM />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <AppD />
        </React.Fragment>
      )}
    </div>
  </div>
  );
};

export default App;
