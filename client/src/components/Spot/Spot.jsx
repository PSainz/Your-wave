import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import ModalMap from "../Modals/ModalMap";
import ModalForecast from "../Modals/ModalForecast";
import ModalInfo from "../Modals/ModalInfo";
import StarIcon from "@mui/icons-material/Star";
import "./Spot.css";

const Spot = ({ spot }) => {
  const src = "./images/logo.png";

  return (
    <div
      className="container-spot"
      style={{ backgroundImage: `url(${spot.selectedFile || src})` }}
    >
      <div className="first-row">
        <p>{spot.spot_name.toUpperCase()}</p>
        <StarIcon />
      </div>
      <div className="last-row">
        <ModalMap spot={spot} />
        <ModalForecast spot={spot} />
        <ModalInfo spot={spot} />
      </div>
    </div>
  );
};

export default Spot;
