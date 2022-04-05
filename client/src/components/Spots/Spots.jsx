import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Grid, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "./../Navbar/Navbar.jsx";
import Spot from "../Spot/Spot";
import { Button } from "@mui/material";
// import useStyles from "./styles";

const Spots = ({ setCurrentId }) => {
  const spots = useSelector((state) => state.spots);
  console.log(spots, "SPOTS RENDER PAGINA SPOTS");
  // const classes = useStyles();

  return !spots.length ? (
    <CircularProgress />
  ) : (
    <div>
      <Navbar />
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/create-spot">Cspot</Link>
        </li>
      </div>
      <Grid className={""} container alignItems="stretch" spacing={3}>
        {spots.map((spot) => (
          <Grid key={spot._id} item xs={12} sm={6} md={6}>
            <Spot spot={spot} setCurrentId={setCurrentId} />
            <img src={spot.selectedFile} style={{ width: "100%" }} />
            <Button
              className={""}
              variant="contained"
              color="primary"
              size="large"
              type="submit"
              fullWidth
            >
              Show forecast
            </Button>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Spots;
