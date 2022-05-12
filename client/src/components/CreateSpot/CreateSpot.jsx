import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import { useNavigate } from "react-router-dom";
import { createSpot } from "../../redux/actions/SpotActions";
import {
  TextField,
  MenuItem,
  Button,
  // Select,
  // OutlinedInput,
} from "@mui/material";
import allCountries from "country-region-data/data.json";
import { waveForms } from "./../../utils/waveForms";
import { waveDirections } from "./../../utils/waveDirections";
import { breakTypes } from "./../../utils/breakTypes";
import Map from "../Gmaps/Map";
import ModalCam from "../Modals/ModalCam";
import { ratings } from "../../utils/ratings";
import "./CreateSpot.css";

const CreateSpot = ({ currentId, setCurrentId }) => {
  const [loaded, setLoaded] = useState(false);
  const [loc, setLoc] = useState({});
  const [show, setShow] = useState(false);
  const [spotData, setSpotData] = useState({
    spot_name: "",
    country: "",
    city: "",
    wave_form: "",
    wave_direction: "",
    break_type: "",
    rating: "",
    location: "",
    selectedFile: "",
  });

  const spot = useSelector((state) =>
    currentId
      ? state.spots.find((spot_name) => spot_name._id === currentId)
      : null
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  let locationSpot = {
    lat: "",
    lng: "",
  };
  console.log(locationSpot, "locationSpotDelCreate");

  const getCoordinates = async () => {
    if (navigator.geolocation) {
      setShow(true);
      const id = navigator.geolocation.watchPosition((position, posError) => {
        console.log(position, "POSITION GET");
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        locationSpot.lat = lat;
        locationSpot.lng = lng;
        setLoc(locationSpot);
        setLoaded(true);
      });
      setTimeout(() => {
        navigator.geolocation.clearWatch(id);
      }, 40000);
    } else {
      alert(
        "Sorry, Geolocation is not supported in by this browser. Try with Google Chrome."
      );
    }
  };

  useEffect(() => {
    if (spot) setSpotData(spot);
  }, [spot]);

  const clear = () => {
    setCurrentId(0);
    setSpotData({
      spot_name: "",
      country: "",
      city: "",
      wave_form: "",
      wave_direction: "",
      break_type: "",
      rating: "",
      location: "",
      selectedFile: "",
    });
  };

  const handleSubmit = async (e) => {
    if (currentId === 0) {
      e.preventDefault();
      spotData.location = loc;
      if (spotData.location.lat === "" && spotData.location.lng === "") {
        window.alert("PLEASE GET LOCATION FIRST");
      } else {
        spotData.location = loc;
        window.alert("LOCATION SUCCED!");
        dispatch(createSpot(spotData));
        clear();
        navigate("/spots");
      }
    } else {
      clear();
    }
  };

  return (
    <div>
      <div className="divHeader">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/spots">SPOTS</Link>
        </li>
      </div>

      <form
        autoComplete="off"
        noValidate
        className="form"
        onSubmit={handleSubmit}
      >
        <div className="input">
          <input
            type="text"
            value={spotData.spot_name || ""}
            onChange={(e) =>
              setSpotData({ ...spotData, spot_name: e.target.value })
            }
            placeholder="Spot Name"
          />
        </div>
        <div className="select">
          <select
            onChange={(e) =>
              setSpotData({ ...spotData, country: e.target.value })
            }
          >
            {allCountries.map((item) => (
              <option value={item.countryName}>{item.countryName}</option>
            ))}
          </select>
        </div>
        <div className="input">
          <input
            type="text"
            value={spotData.city || ""}
            onChange={(e) => setSpotData({ ...spotData, city: e.target.value })}
            placeholder="City - Region"
          />
        </div>
        <div className="select">
          <select
            onChange={(e) =>
              setSpotData({ ...spotData, wave_form: e.target.value })
            }
          >
            {waveForms.map((item) => (
              <option value={item.value}>{item.value}</option>
            ))}
          </select>
        </div>
        <div className="select">
          <select
            onChange={(e) =>
              setSpotData({ ...spotData, wave_direction: e.target.value })
            }
          >
            {waveDirections.map((item) => (
              <option value={item.value}>{item.value}</option>
            ))}
          </select>
        </div>
        <div className="select">
          <select
            onChange={(e) =>
              setSpotData({ ...spotData, break_type: e.target.value })
            }
          >
            {breakTypes.map((item) => (
              <option value={item.value}>{item.value}</option>
            ))}
          </select>
        </div>
        <div className="select">
          <select
            onChange={(e) =>
              setSpotData({ ...spotData, rating: e.target.value })
            }
          >
            {ratings.map((rating) => (
              <option value={rating.value}>{rating.label}</option>
            ))}
          </select>
        </div>
      </form>
      <ModalCam data={spotData} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          className="marginButton"
          variant="contained"
          color="primary"
          size="small"
          type="submit"
          fullWidth
          onClick={() => getCoordinates()}
        >
          Get current Location
        </Button>
      </div>
      <div className={!show ? "hide" : "show"}>
        {!!loaded ? (
          <React.Fragment>
            <Map location={loc} zoomLevel={15} />
          </React.Fragment>
        ) : (
          <p className="textCenter">...GETTING CURRENT LOCATION...</p>
        )}
      </div>
      <Button
        variant="contained"
        color="error"
        size="small"
        onClick={clear}
        fullWidth
      >
        Clear
      </Button>
      <Button
        className={""}
        variant="contained"
        color="success"
        size="large"
        type="submit"
        fullWidth
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </div>
  );
};

export default CreateSpot;
