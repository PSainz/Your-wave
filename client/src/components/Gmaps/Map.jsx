import React from "react";
import GoogleMapReact from "google-map-react";
import LocationPin from "./LocationPin.jsx";
// import dotenv from "dotenv-webpack";
// dotenv.config();
import "./Map.css";

const Map = ({ location, zoomLevel }) => {
  return (
    <div className="google-map">
      {/* <button onClick={getLocation()} style={{ display: "none" }}></button> */}
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
