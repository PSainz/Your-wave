import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import { useNavigate } from "react-router-dom";
import { createSpot } from "../../actions/spots";
import {
  TextField,
  MenuItem,
  Button,
  // Select,
  // OutlinedInput,
} from "@mui/material";
import allCountries from "country-region-data/data.json";
import Navbar from "./../Navbar/Navbar.jsx";
import { waveForms } from "./../../utils/waveForms";
import { waveDirections } from "./../../utils/waveDirections";
import { breakTypes } from "./../../utils/breakTypes";
import { ratings } from "./../../utils/ratings";
import Modal from "../Modal/Modal";

// import { countries } from "./../../utils/countries";
// import useStyles from "./styles";
// import Modal from "./../Modal/Modal.jsx";
// import Map from "./../Gmaps/Map.jsx";
// import useGeoLocation from "./../../hooks/useGeoLocation";

// console.log(allCountries, "allCountries");

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

const CreateSpot = ({ currentId, setCurrentId }) => {
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
      const id = navigator.geolocation.watchPosition((position, posError) => {
        console.log(position, "POSITION GET");
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        locationSpot.lat = lat;
        locationSpot.lng = lng;
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
      spotData.location = locationSpot;
      if (spotData.location.lat === "" && spotData.location.lng === "") {
        window.alert("PLEASE GET LOCATION FIRST");
      } else {
        spotData.location = locationSpot;
        window.alert("LOCATION SUCCED!");
        // console.log(spotData.location, "spotData.location.HandleSubmit");
        setTimeout(() => {
          dispatch(createSpot(spotData));
          clear();
          navigate("/spots");
        }, 3000);
        // dispatch(createSpot(spotData));
        // clear();
        // navigate("/spots");
      }
    } else {
      // dispatch(updatePost(currentId, postData));
      clear();
    }
  };

  return (
    <div>
      <Navbar />
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/spots">Spots</Link>
        </li>
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
          // SelectProps={{
          //   menuprops: { MenuProps },
          // }}
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
                {item.text}
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
        {/* <Button
          className={""}
          variant="contained"
          color="primary"
          size="small"
          type="submit"
          fullWidth
          onClick={() => getCoordinates()}
        >
          Get current Location
        </Button> */}
      </div>
      <div onClick={() => getCoordinates()}>
        <Modal location={locationSpot} />
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
