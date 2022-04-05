import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Modal from "@mui/material/Modal";
import Map from "./../Gmaps/Map.jsx";
import hours from "../../utils/forecast.json";
import { style, forecastInfo, morning, upRow } from "./styles";

export default function BasicModal({ spot }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const forecast = hours.hours;
  console.log(forecast, "forecast");

  // 807b335c-e8f5-11e9-80bf-0242ac130004-807b347e-e8f5-11e9-80bf-0242ac130004

  // const getForecast = () => {
  //   const params =
  //     "airTemperature,precipitation,waterTemperature,waveDirection,waveHeight,wavePeriod,windDirection";

  //   fetch(
  //     `https://api.stormglass.io/v2/weather/point?lat=${spot.location.lat}&lng=${spot.location.lng}&params=${params}`,
  //     {
  //       headers: {
  //         Authorization:
  //           "807b335c-e8f5-11e9-80bf-0242ac130004-807b347e-e8f5-11e9-80bf-0242ac130004",
  //       },
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((jsonData) => {
  //       console.log(jsonData, "API FORECAST");
  //     });
  // };

  return (
    <div>
      <Button
        className={""}
        variant="contained"
        color="primary"
        size="large"
        type="fire"
        onClick={handleOpen}
      >
        Show Forecast
      </Button>
      {/* <Button
        className={""}
        variant="contained"
        color="primary"
        size="large"
        type="fire"
        onClick={getForecast}
      >
        Api call forecast
      </Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <h2>{spot.spot_name}</h2>
          </div>
          <div className={forecastInfo}>
            <div className={morning}>
              <div className="upRow">
                <ul>
                  {!!forecast && (
                    <li>
                      {/* <i class="material-icons">brightness_7</i> */}
                      {forecast[4].airTemperature.noaa.toFixed()} -
                      {forecast[12].airTemperature.noaa.toFixed()}
                      ºC
                    </li>
                  )}
                </ul>
                <p>Morning 05 - 11h</p>
                <ul>
                  {!!forecast && (
                    <li>
                      {/* <i class="material-icons">opacity</i> */}
                      {forecast[4].waterTemperature.meto.toFixed()} -
                      {forecast[12].waterTemperature.meto.toFixed()}
                      ºC
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
          <Map location={spot.location} zoomLevel={15} />
        </Box>
      </Modal>
    </div>
  );
}
