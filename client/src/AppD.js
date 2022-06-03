import React from "react";
import Iframe from "react-iframe";
import "./AppD.css";

const AppD = () => {
  return (
    <>
    <div className="header"><h1>YOUR WAVE</h1><p>(Mock app, developing native App)</p></div>
    <div class="smartphone">
      <div class="content">
        <Iframe
          url="https://your-wave.netlify.app/"
          width="335px"
          height="640px"
          id="myId"
          className="iframe"
          display="initial"
          position="relative"
        />
      </div>
    </div>
    </>
  );
};

export default AppD;


