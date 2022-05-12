import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import "./SpotDetail.css";
import StarIcon from "@mui/icons-material/Star";

const SpotDetail = ({ spot }) => {
  const src = "./images/logo.png";

  return (
    <div className="container-spot-detail">
      <div
        className="spot-img"
        style={{ backgroundImage: `url(${spot.selectedFile || src})` }}
      ></div>
      <div className="spot-info">
        <div className="upRow">
          <ul>
            <li>
              <p className="bold">SPOT NAME</p>
            </li>
            <li>{spot.spot_name.toUpperCase()}</li>
          </ul>
          <ul>
            <li>
              <p className="bold">COUNTRY</p>
            </li>
            <li>{spot.country.toUpperCase()}</li>
          </ul>
        </div>
        <div className="midRow">
          <ul>
            <li>
              <p className="bold">CITY</p>
            </li>
            <li>{spot.city.toUpperCase()}</li>
          </ul>
          <ul>
            <li>
              <p className="bold">WAVE FORM</p>
            </li>
            <li>{spot.wave_form.toUpperCase()}</li>
          </ul>
        </div>
        <div className="downRow">
          <ul>
            <li>
              <p className="bold">WAVE DIRECTION</p>
            </li>
            <li>{spot.wave_direction.toUpperCase()}</li>
          </ul>
          <ul>
            <li>
              <p className="bold">BREAK TYPE</p>
            </li>
            <li>{spot.break_type.toUpperCase()}</li>
          </ul>
        </div>
        <div className="ratings">
          {spot.rating}
          <StarIcon />
        </div>
      </div>
    </div>
  );
};

export default SpotDetail;
