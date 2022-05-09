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
import { ratings } from "./../../utils/ratings";
import Map from "../Gmaps/Map";
import ModalCam from "../Modals/ModalCam";
import "./styles.css";

const CreateSpot = ({ currentId, setCurrentId }) => {
  const [loaded, setLoaded] = useState(false);
  const [loc, setLoc] = useState({});
  const [show, setShow] = useState(false);
  console.log(show, "show");
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

  console.log(ratings, "ratings");

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

  console.log(loc, "loc");

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
        // console.log(spotData.location, "spotData.location.HandleSubmit");
        // setTimeout(() => {
        //   dispatch(createSpot(spotData));
        //   clear();
        //   navigate("/spots");
        // }, 3000);
        dispatch(createSpot(spotData));
        clear();
        navigate("/spots");
      }
    } else {
      // dispatch(updatePost(currentId, postData));
      clear();
    }
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/spots">Spots</Link>
        </li>
        <ModalCam data={spotData} />
      </div>

      <form
        autoComplete="off"
        noValidate
        className={""}
        onSubmit={handleSubmit}
      >
        <TextField
          inputProps={{ pattern: "[a-z]" }}
          name="spot_name"
          required
          variant="outlined"
          label="Spot Name"
          fullWidth
          value={spotData.spot_name || ""}
          onChange={(e) =>
            setSpotData({ ...spotData, spot_name: e.target.value })
          }
        />
        <TextField
          name="Country"
          margin="dense"
          required
          variant="outlined"
          fullWidth
          select
          label="Country"
          value={spotData.country}
          onChange={(e) =>
            setSpotData({ ...spotData, country: e.target.value })
          }
        >
          {allCountries.map((item) => {
            return (
              <MenuItem key={item.countryName} value={item.countryName || ""}>
                {item.countryName}
              </MenuItem>
            );
          })}
        </TextField>
        <TextField
          name="city"
          margin="dense"
          required
          variant="outlined"
          label="City - Region"
          fullWidth
          value={spotData.city || ""}
          onChange={(e) => setSpotData({ ...spotData, city: e.target.value })}
        />
        <TextField
          name="Wave form"
          margin="dense"
          required
          variant="outlined"
          fullWidth
          select
          label="Wave form"
          value={spotData.wave_form}
          onChange={(e) =>
            setSpotData({ ...spotData, wave_form: e.target.value })
          }
        >
          {waveForms.map((item) => {
            return (
              <MenuItem key={item.value} value={item.value || ""}>
                {item.text}
              </MenuItem>
            );
          })}
        </TextField>
        <TextField
          name="Wave direction"
          margin="dense"
          required
          variant="outlined"
          fullWidth
          select
          label="Wave direction"
          value={spotData.wave_direction}
          onChange={(e) =>
            setSpotData({ ...spotData, wave_direction: e.target.value })
          }
        >
          {waveDirections.map((item) => {
            return (
              <MenuItem key={item.value} value={item.value || ""}>
                {item.text}
              </MenuItem>
            );
          })}
        </TextField>
        <TextField
          name="Break type"
          margin="dense"
          required
          variant="outlined"
          fullWidth
          select
          label="Break type"
          value={spotData.break_type}
          onChange={(e) =>
            setSpotData({ ...spotData, break_type: e.target.value })
          }
        >
          {breakTypes.map((item) => {
            return (
              <MenuItem key={item.value} value={item.value || ""}>
                {item.text}
              </MenuItem>
            );
          })}
        </TextField>
        <TextField
          name="Rating"
          margin="dense"
          required
          variant="outlined"
          fullWidth
          select
          label="Rating"
          value={spotData.rating}
          onChange={(e) => setSpotData({ ...spotData, rating: e.target.value })}
        >
          {ratings.map((item) => {
            return (
              <MenuItem key={item.value} value={item.value || ""}>
                {item.label}
              </MenuItem>
            );
          })}
        </TextField>
        <div className={""}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setSpotData({ ...spotData, selectedFile: base64 })
            }
          />
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
      </form>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          className={""}
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
          <p>Loading current location...</p>
        )}
      </div>
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
