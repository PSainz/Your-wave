import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Modal from "@mui/material/Modal";
import Map from "./../Gmaps/Map.jsx";
// import hours from "../../utils/forecast.json";
import Forecast from "../Forecast/Forecast";
import SpotDetail from "../SpotDetail/SpotDetail";
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <SpotDetail spot={spot} />
          <Forecast spot={spot} />
          <Map location={spot.location} zoomLevel={15} />
        </Box>
      </Modal>
    </div>
  );
}
