import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import { useNavigate } from "react-router-dom";
import { createSpot } from "../../actions/spots";
import { TextField, MenuItem, Button } from "@mui/material";
// import useStyles from "./styles";
import Navbar from "./../Navbar/Navbar.jsx";
// import Modal from "./../Modal/Modal.jsx";
// import Map from "./../Gmaps/Map.jsx";
// import useGeoLocation from "./../../hooks/useGeoLocation";

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
  console.log(locationSpot, "locationSpot");

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
        }, 5000);
        // dispatch(createSpot(spotData));
        // clear();
        // navigate("/spots");
      }
    } else {
      // dispatch(updatePost(currentId, postData));
      clear();
    }
  };

  const waveForms = [
    { value: "Hollow", text: "Hollow" },
    { value: "Fat", text: "Fat" },
    { value: "Mellow", text: "Mellow" },
  ];

  const waveDirections = [
    { value: "Left", text: "Left" },
    { value: "Right", text: "Right" },
    { value: "A-Frame", text: "A-Frame" },
  ];

  const breakTypes = [
    { value: "Reef", text: "Reef" },
    { value: "Sand", text: "Sand" },
    { value: "Rock", text: "Rock" },
  ];

  const ratings = [
    { value: 1, text: "1" },
    { value: 2, text: "2" },
    { value: 3, text: "3" },
    { value: 4, text: "4" },
    { value: 5, text: "5" },
  ];

  return (
    <div>
      <Navbar />
      <form
        autoComplete="off"
        noValidate
        className={""}
        onSubmit={handleSubmit}
      >
        <TextField
          name="spot_name"
          variant="outlined"
          label="Spot Name*"
          fullWidth
          value={spotData.spot_name || ""}
          onChange={(e) =>
            setSpotData({ ...spotData, spot_name: e.target.value })
          }
        />
        <TextField
          name="country"
          variant="outlined"
          label="Country*"
          fullWidth
          value={spotData.country || ""}
          onChange={(e) =>
            setSpotData({ ...spotData, country: e.target.value })
          }
        />
        <TextField
          name="city"
          variant="outlined"
          label="City*"
          fullWidth
          value={spotData.city || ""}
          onChange={(e) => setSpotData({ ...spotData, city: e.target.value })}
        />
        <TextField
          name="Wave form"
          variant="outlined"
          fullWidth
          select
          label="Wave form*"
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
          variant="outlined"
          fullWidth
          select
          label="Wave direction*"
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
          variant="outlined"
          fullWidth
          select
          label="Break type*"
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
          variant="outlined"
          fullWidth
          select
          label="Rating*"
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
          color="secondary"
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
      <Button
        className={""}
        variant="contained"
        color="primary"
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
