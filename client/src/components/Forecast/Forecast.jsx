import React from "react";
import { CircularProgress } from "@mui/material";
import hours from "../../utils/forecast.json";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import TimelapseIcon from "@mui/icons-material/Timelapse";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import "./styles.css";

const Forecast = ({ spot }) => {
  const forecast = hours.hours;
  const loaded = true;

  let conditionStatusMorning = "";
  if (forecast[4].windSpeed.icon < 4 && forecast[12].windSpeed.icon < 4) {
    conditionStatusMorning = "Clean";
  } else {
    conditionStatusMorning = "Bumpy";
    return conditionStatusMorning;
  }

  let conditionStatusMidDay = "";
  if (forecast[12].windSpeed.icon < 4 && forecast[18].windSpeed.icon < 4) {
    conditionStatusMidDay = "Clean";
  } else {
    conditionStatusMidDay = "Bumpy";
    return conditionStatusMidDay;
  }

  let conditionStatusEvening = "";
  if (forecast[18].windSpeed.icon < 4 && forecast[24].windSpeed.icon < 4) {
    conditionStatusEvening = "Clean";
  } else {
    conditionStatusEvening = "Bumpy";
    return conditionStatusEvening;
  }

  //   const [forecast, setForecast] = useState([]);
  //   const [loaded, setLoaded] = useState(false);

  //   useEffect(() => {
  //     const getForecast = () => {
  //       const params =
  //         "airTemperature,precipitation,waterTemperature,waveDirection,waveHeight,wavePeriod,windDirection,windSpeed";

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
                  <FilterDramaIcon />
                  {forecast[12].airTemperature.noaa.toFixed()}
                  ºC
                </li>
              </ul>
              <p>Morning 05 - 11</p>
              <ul>
                <li>
                  {/* <i class="material-icons">opacity</i> */}
                  <WbSunnyIcon />
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
                {conditionStatusMorning}
              </ul>
            </div>
            <div className="downRow">
              <ul>
                <li>
                  {/* <i class="material-icons">opacity</i> */}
                  <p>Period</p>
                  <TimelapseIcon />
                  {forecast[4].wavePeriod.meteo.toFixed()} -{" "}
                  {forecast[12].wavePeriod.meteo.toFixed()} s
                </li>
              </ul>
              <ul>
                <li>
                  <p>Wind</p>
                  <ArrowDownwardIcon />
                  {forecast[4].windSpeed.icon.toFixed()} -{" "}
                  {forecast[12].windSpeed.icon.toFixed()} m/s
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
                  <FilterDramaIcon />
                  {forecast[18].airTemperature.noaa.toFixed()}
                  ºC
                </li>
              </ul>
              <p>Mid day 11 - 17</p>
              <ul>
                <li>
                  {/* <i class="material-icons">opacity</i> */}
                  <WbSunnyIcon />
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
                {conditionStatusMidDay}
              </ul>
            </div>
            <div className="downRow">
              <ul>
                <li>
                  {/* <i class="material-icons">opacity</i> */}
                  <p>Period</p>
                  <TimelapseIcon />
                  {forecast[12].wavePeriod.meteo.toFixed()} -{" "}
                  {forecast[18].wavePeriod.meteo.toFixed()} s
                </li>
              </ul>
              <ul>
                <li>
                  <p>Wind</p>
                  <ArrowDownwardIcon />
                  {forecast[12].windDirection.icon.toFixed()} -{" "}
                  {forecast[18].windSpeed.icon.toFixed()} m/s
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
                  <FilterDramaIcon />
                  {forecast[18].airTemperature.noaa.toFixed()}
                  ºC
                </li>
              </ul>
              <p>Evening 17 - 23</p>
              <ul>
                <li>
                  {/* <i class="material-icons">opacity</i> */}
                  <WbSunnyIcon />
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
                {conditionStatusEvening}
              </ul>
            </div>
            <div className="downRow">
              <ul>
                <li>
                  {/* <i class="material-icons">opacity</i> */}
                  <p>Period</p>
                  <TimelapseIcon />
                  {forecast[18].wavePeriod.meteo.toFixed()} -{" "}
                  {forecast[24].wavePeriod.meteo.toFixed()} s
                </li>
              </ul>
              <ul>
                <li>
                  <p>Wind</p>
                  <ArrowDownwardIcon />
                  {forecast[18].windSpeed.icon.toFixed()} -{" "}
                  {forecast[24].windSpeed.icon.toFixed()} m/s
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
