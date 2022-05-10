import express from 'express';
import Spot from "../models/spot.js";
const router = express.Router();

export const getSpots = async (req, res) => {
    try {
      const spots = await Spot.find();
  
      res.status(200).json(spots);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
  
  export const getSpot = async (req, res) => {
    const { id } = req.params;
  
    try {
      const spot = await Spot.findById(id);
  
      res.status(200).json(spot);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
  
  export const createSpot = async (req, res) => {
    const {
      spot_name,
      country,
      city,
      wave_form,
      wave_direction,
      break_type,
      rating,
      selectedFile,
      location
    } = req.body;
  
    const newSpot = new Spot({
      spot_name,
      country,
      city,
      wave_form,
      wave_direction,
      break_type,
      rating,
      selectedFile,
      location
    });
  
    try {
      await newSpot.save();
      res.status(201).json(newSpot);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  };

  export default router;