import mongoose from "mongoose";

const spotSchema = mongoose.Schema({
  spot_name: {
    type: String,
  },
  countrie: {
    type: String,
  },
  city: {
    type: String,
  },
  wave_form: {
    type: String,
  },
  wave_direction: {
    type: String,
  },
  break_type: {
    type: String,
  },
  rating: {
    type: Number,
  },
  location: {
    type: {},
  },
  selectedFile: {
    type: String,
  },
});

var Spot = mongoose.model("Spot", spotSchema);

export default Spot;


