import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import "./Home.css";

function Home() {
  const src = "./images/logo.png";

  return (
    <div className="container">
      <h1 className="title">YOUR WAVE</h1>
      <div className="logo">
        <img src={src} alt="logo" />
      </div>
      <div>
        <ul className="links">
          <li>
            <Link to="/spots" className="spots">
              SPOTS
            </Link>
          </li>
          <li>
            <Link to="/create-spot" className="create-spot">
              CREATE SPOT
            </Link>
          </li>
        </ul>
      </div>
      <div className="text">
        <p>...APP IN PROGRESS...</p>
        <br></br>
        <CircularProgress />
      </div>
      <div className="space"></div>
    </div>
  );
}

export default Home;
