import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Forecast from "../Forecast/Forecast";
import "./ModalForecast.css";

const style = {
  height: "90%",
  bgcolor: "background.paper",
  overflowX: "hidden",
  overflowY: "auto",
  marginTop: "30px",
};

export default function BasicModal({ spot }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <span onClick={handleOpen} className="text-forecast">
        {" "}
        FORECAST
      </span>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Forecast spot={spot} />
        </Box>
      </Modal>
    </div>
  );
}
