import mongoose from "mongoose";

const spotSchema = mongoose.Schema({
  spot_name: {
    type: String,
    required: [true, "Spot name field is required"],
  },
  country: {
    type: String,
    required: [true, "Country field is required"],
  },
  city: {
    type: String,
    required: [true, "City field is required"],
  },
  wave_form: {
    type: String,
    required: [true, "Wave form field is required"],
    enum: ["Fat", "Hollow", "Mellow"],
  },
  wave_direction: {
    type: String,
    required: [true, "Wave direction field is required"],
    enum: ["Left", "Right", "A-Frame"],
  },
  break_type: {
    type: String,
    required: [true, "Break type field is required"],
    enum: ["Reef", "Sand", "Rock"],
  },
  rating: {
    type: Number,
    required: [true, "Rating field is required"],
    enum: [1, 2, 3, 4, 5],
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


