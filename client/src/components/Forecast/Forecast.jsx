import React from "react";
import { CircularProgress } from "@mui/material";

const Forecast = () => {
  // const classes = useStyles();

  return (
    <div>
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
    </div>
  );
};

export default Forecast;
