import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import hours from "../../utils/forecast.json";
import "./styles.css";

const Forecast = ({ spot }) => {
  const forecast = hours.hours;
  const loaded = true;

  //   const [forecast, setForecast] = useState([]);
  //   const [loaded, setLoaded] = useState(false);

  //   useEffect(() => {
  //     const getForecast = () => {
  //       const params =
  //         "airTemperature,precipitation,waterTemperature,waveDirection,waveHeight,wavePeriod,windDirection";

  //       fetch(
  //         `https://api.stormglass.io/v2/weather/point?lat=${spot.location.lat}&lng=${spot.location.lng}&params=${params}`,
  //         {
  //           headers: {
  //             Authorization:
  //               "807b335c-e8f5-11e9-80bf-0242ac130004-807b347e-e8f5-11e9-80bf-0242ac130004",
  //           },
  //         }
  //       )
  //         .then((response) => response.json())
  //         .then((jsonData) => {
  //           setForecast(jsonData.hours);
  //           setLoaded(true);
  //         });
  //     };
  //     getForecast();
  //   }, []);

  return (
    <div className="forecastInfo">
      <div className="morning">
        {!!loaded ? (
          <React.Fragment>
            <div className="upRow">
              <ul>
                <li>
                  {/* <i class="material-icons">brightness_7</i> */}
                  {forecast[12].airTemperature.noaa.toFixed()}
                  ºC
                </li>
              </ul>
              <p>Morning 05 - 11h</p>
              <ul>
                <li>
                  {/* <i class="material-icons">opacity</i> */}
                  {forecast[12].waterTemperature.meto.toFixed()}
                  ºC
                </li>
              </ul>
            </div>
            <div className="midRow">
              <ul>
                <li>
                  {/* <i class="material-icons">opacity</i> */}
                  {forecast[4].waveHeight.meteo} -{" "}
                  {forecast[12].waveHeight.meteo} m
                </li>
              </ul>
            </div>
            <div className="downRow">
              <ul>
                <li>
                  {/* <i class="material-icons">opacity</i> */}
                  {forecast[4].wavePeriod.meteo.toFixed()} -{" "}
                  {forecast[12].wavePeriod.meteo.toFixed()} s
                </li>
              </ul>
              <ul>
                <li>
                  {forecast[4].windDirection.icon.toFixed()} -{" "}
                  {forecast[12].windDirection.icon.toFixed()} m/s
                </li>
              </ul>
            </div>
          </React.Fragment>
        ) : (
          <CircularProgress />
        )}
      </div>
      <div className="midDay">
        {!!loaded ? (
          <React.Fragment>
            <div className="upRow">
              <ul>
                <li>
                  {/* <i class="material-icons">brightness_7</i> */}
                  {forecast[18].airTemperature.noaa.toFixed()}
                  ºC
                </li>
              </ul>
              <p>Mid day 11 - 17h</p>
              <ul>
                <li>
                  {/* <i class="material-icons">opacity</i> */}
                  {forecast[18].waterTemperature.meto.toFixed()}
                  ºC
                </li>
              </ul>
            </div>
            <div className="midRow">
              <ul>
                <li>
                  {/* <i class="material-icons">opacity</i> */}
                  {forecast[12].waveHeight.meteo} -{" "}
                  {forecast[18].waveHeight.meteo} m
                </li>
              </ul>
            </div>
            <div className="downRow">
              <ul>
                <li>
                  {/* <i class="material-icons">opacity</i> */}
                  {forecast[12].wavePeriod.meteo.toFixed()} -{" "}
                  {forecast[18].wavePeriod.meteo.toFixed()} s
                </li>
              </ul>
              <ul>
                <li>
                  {forecast[12].windDirection.icon.toFixed()} -{" "}
                  {forecast[18].windDirection.icon.toFixed()} m/s
                </li>
              </ul>
            </div>
          </React.Fragment>
        ) : (
          <CircularProgress />
        )}
      </div>
      <div className="evening">
        {!!loaded ? (
          <React.Fragment>
            <div className="upRow">
              <ul>
                <li>
                  {/* <i class="material-icons">brightness_7</i> */}
                  {forecast[18].airTemperature.noaa.toFixed()}
                  ºC
                </li>
              </ul>
              <p>Evening 17 - 23h</p>
              <ul>
                <li>
                  {/* <i class="material-icons">opacity</i> */}
                  {forecast[24].waterTemperature.meto.toFixed()}
                  ºC
                </li>
              </ul>
            </div>
            <div className="midRow">
              <ul>
                <li>
                  {/* <i class="material-icons">opacity</i> */}
                  {forecast[18].waveHeight.meteo} -{" "}
                  {forecast[24].waveHeight.meteo} m
                </li>
              </ul>
            </div>
            <div className="downRow">
              <ul>
                <li>
                  {/* <i class="material-icons">opacity</i> */}
                  {forecast[18].wavePeriod.meteo.toFixed()} -{" "}
                  {forecast[24].wavePeriod.meteo.toFixed()} s
                </li>
              </ul>
              <ul>
                <li>
                  {forecast[18].windDirection.icon.toFixed()} -{" "}
                  {forecast[24].windDirection.icon.toFixed()} m/s
                </li>
              </ul>
            </div>
          </React.Fragment>
        ) : (
          <CircularProgress />
        )}
      </div>
    </div>
  );
};

export default Forecast;
