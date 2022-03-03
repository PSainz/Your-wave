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

// import { likePost, deletePost } from '../../../actions/posts';
// import useStyles from "./styles";

const Spot = ({ spot, setCurrentId }) => {
  const dispatch = useDispatch();
  // const classes = useStyles();

  return (
    <Card className={""}>
      <CardMedia
        className={""}
        image={spot.selectedFile || ""}
        title={spot.spot_name}
      />
      <div className={""}>
        <Typography variant="h6">{spot.country}</Typography>
      </div>
      <div className={""}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => setCurrentId(spot._id)}
        >
          {/* <MoreHorizIcon fontSize="default" /> */}
        </Button>
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
    </Card>
  );
};

export default Spot;
