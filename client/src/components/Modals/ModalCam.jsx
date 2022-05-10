import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Camera, { FACING_MODES, IMAGE_TYPES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
// import Cam from "../TakePicture/Cam";
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
  marginTop: "30px",
  //   border: "2px solid #000",
  //   boxShadow: 24,
  //   p: 4,
};

export default function BasicModal({ data }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [dataUri, setDataUri] = useState("");

  const handleTakePhotoAnimationDone = (dataUri) => {
    setDataUri(dataUri);
    data.selectedFile = dataUri;
    // console.log(dataUri, "dataUri");
  };

  // const isFullscreen = true;
  // const imageType = "jpg";

  return (
    <div>
      <Button
        className={""}
        variant="contained"
        color="primary"
        size="large"
        type="fire"
        fullWidth
        onClick={handleOpen}
      >
        Take pic
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            {dataUri ? (
              <img src={dataUri} alt="" />
            ) : (
              <Camera
                onTakePhotoAnimationDone={handleTakePhotoAnimationDone}
                isFullscreen={false}
                imageType={IMAGE_TYPES.JPG}
                imageCompression={0.97}
                isMaxResolution={false}
              />
            )}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
