import React from "react";
// import {
//   Card,
//   CardActions,
//   CardContent,
//   CardMedia,
//   Button,
//   Typography,
// } from "@mui/material";

const SpotDetail = ({ spot }) => {
  return (
    <div>
      <p>{spot.spot_name}</p>
      <p>{spot.break_type}</p>
      <p>{spot.city}</p>
      <p>{spot.country}</p>
      <p>{spot.rating}</p>
      <p>{spot.wave_direction}</p>
      <p>{spot.wave_form}</p>
    </div>
  );
};

export default SpotDetail;
