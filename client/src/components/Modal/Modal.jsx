import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Modal from "@mui/material/Modal";
import Map from "./../Gmaps/Map.jsx";
import hours from "../../utils/forecast.json";
import "./styles.css";

const style = {
  //   position: "absolute",
  //   top: "50%",
  //   left: "50%",
  //   transform: "translate(-50%, -50%)",
  //   width: "100%",
  height: "90%",
  bgcolor: "background.paper",
  overflowX: "hidden",
  overflowY: "auto",
  border: "1px solid red",
  marginTop: "30px",
  //   border: "2px solid #000",
  //   boxShadow: 24,
  //   p: 4,
};

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
          <div className="forecastInfo">
            <div className="morning">
              <div className="upRow">
                <ul>
                  {!!forecast && (
                    <li>
                      {/* <i class="material-icons">brightness_7</i> */}
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
                      {forecast[12].waterTemperature.meto.toFixed()}
                      ºC
                    </li>
                  )}
                </ul>
              </div>
              <div className="midRow">
                <ul>
                  {!!forecast && (
                    <li>
                      {/* <i class="material-icons">opacity</i> */}
                      {forecast[4].waveHeight.meteo} -{" "}
                      {forecast[12].waveHeight.meteo} m
                    </li>
                  )}
                </ul>
              </div>
              <div className="downRow">
                <ul>
                  {!!forecast && (
                    <li>
                      {/* <i class="material-icons">opacity</i> */}
                      {forecast[4].wavePeriod.meteo.toFixed()} -{" "}
                      {forecast[12].wavePeriod.meteo.toFixed()} s
                    </li>
                  )}
                </ul>
                <ul>
                  {!!forecast && (
                    <li>
                      {forecast[4].windDirection.icon.toFixed()} -{" "}
                      {forecast[12].windDirection.icon.toFixed()} m/s
                    </li>
                  )}
                </ul>
              </div>
            </div>
            <div className="midDay">
              <div className="upRow">
                <ul>
                  {!!forecast && (
                    <li>
                      {/* <i class="material-icons">brightness_7</i> */}
                      {forecast[18].airTemperature.noaa.toFixed()}
                      ºC
                    </li>
                  )}
                </ul>
                <p>Mid day 11 - 17h</p>
                <ul>
                  {!!forecast && (
                    <li>
                      {/* <i class="material-icons">opacity</i> */}
                      {forecast[18].waterTemperature.meto.toFixed()}
                      ºC
                    </li>
                  )}
                </ul>
              </div>
              <div className="midRow">
                <ul>
                  {!!forecast && (
                    <li>
                      {/* <i class="material-icons">opacity</i> */}
                      {forecast[12].waveHeight.meteo} -{" "}
                      {forecast[18].waveHeight.meteo} m
                    </li>
                  )}
                </ul>
              </div>
              <div className="downRow">
                <ul>
                  {!!forecast && (
                    <li>
                      {/* <i class="material-icons">opacity</i> */}
                      {forecast[12].wavePeriod.meteo.toFixed()} -{" "}
                      {forecast[18].wavePeriod.meteo.toFixed()} s
                    </li>
                  )}
                </ul>
                <ul>
                  {!!forecast && (
                    <li>
                      {forecast[12].windDirection.icon.toFixed()} -{" "}
                      {forecast[18].windDirection.icon.toFixed()} m/s
                    </li>
                  )}
                </ul>
              </div>
            </div>
            <div className="evening">
              <div className="upRow">
                <ul>
                  {!!forecast && (
                    <li>
                      {/* <i class="material-icons">brightness_7</i> */}
                      {forecast[18].airTemperature.noaa.toFixed()}
                      ºC
                    </li>
                  )}
                </ul>
                <p>Evening 17 - 23h</p>
                <ul>
                  {!!forecast && (
                    <li>
                      {/* <i class="material-icons">opacity</i> */}
                      {forecast[24].waterTemperature.meto.toFixed()}
                      ºC
                    </li>
                  )}
                </ul>
              </div>
              <div className="midRow">
                <ul>
                  {!!forecast && (
                    <li>
                      {/* <i class="material-icons">opacity</i> */}
                      {forecast[18].waveHeight.meteo} -{" "}
                      {forecast[24].waveHeight.meteo} m
                    </li>
                  )}
                </ul>
              </div>
              <div className="downRow">
                <ul>
                  {!!forecast && (
                    <li>
                      {/* <i class="material-icons">opacity</i> */}
                      {forecast[18].wavePeriod.meteo.toFixed()} -{" "}
                      {forecast[24].wavePeriod.meteo.toFixed()} s
                    </li>
                  )}
                </ul>
                <ul>
                  {!!forecast && (
                    <li>
                      {forecast[18].windDirection.icon.toFixed()} -{" "}
                      {forecast[24].windDirection.icon.toFixed()} m/s
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
