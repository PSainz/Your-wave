import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
// import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
// import DeleteIcon from "@material-ui/icons/Delete";
// import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useDispatch } from "react-redux";
import Modal from "../Modal/Modal";

// import { likePost, deletePost } from '../../../actions/posts';
// import useStyles from "./styles";

const Spot = ({ spot, setCurrentId }) => {
  const dispatch = useDispatch();
  // const classes = useStyles();

  return (
    <Card className={""} style={{ border: "1px solid blue" }}>
      <CardMedia
        className={""}
        image={
          spot.selectedFile ||
          "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
        }
        title={spot.spot_name}
      />
      <div className={""}>
        <Typography variant="h6">{spot.spot_name}</Typography>
      </div>

      <div className={""}>
        <Typography variant="body2" color="textSecondary" component="h2">
          {spot.country}
        </Typography>
      </div>
      <Typography className={""} gutterBottom variant="h5" component="h2">
        {spot.city}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {spot.wave_form}
        </Typography>
      </CardContent>
      <img src={spot.selectedFile} style={{ width: "100%" }} />
      <Modal spot={spot} />
    </Card>
  );
};

export default Spot;
