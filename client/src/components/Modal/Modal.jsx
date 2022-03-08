import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Map from "./../Gmaps/Map.jsx";

const style = {
  //   position: "absolute",
  //   top: "50%",
  //   left: "50%",
  //   transform: "translate(-50%, -50%)",
  //   width: "100%",
  height: "80%",
  bgcolor: "background.paper",
  //   border: "2px solid #000",
  //   boxShadow: 24,
  //   p: 4,
};

// const location = {
//   address: "1600 Amphitheatre Parkway, Mountain View, california.",
//   lat: 37.42216,
//   lng: -122.08427,
// };

let location = {
  lat: "",
  lng: "",
};

const getCoordinates = async () => {
  navigator.geolocation.watchPosition((position, posError) => {
    console.log(position, "POSITION GET");
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    location.lat = lat;
    location.lng = lng;
  });
};

getCoordinates();

export default function BasicModal() {
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
        Check current location in map
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>Aqui iria llamada a la api y demás info del Spot</div>
          {/* <Map location={location} zoomLevel={7} /> */}
        </Box>
      </Modal>
    </div>
  );
}
