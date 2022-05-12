import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import SpotDetail from "../SpotDetail/SpotDetail";
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
        INFO
      </span>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <SpotDetail spot={spot} />
        </Box>
      </Modal>
    </div>
  );
}
