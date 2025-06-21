const mongoose = require('mongoose');
const Trip = mongoose.model('trips');

// GET all trips
const tripsList = async (req, res) => {
  try {
    const trips = await Trip.find();
    res.status(200).json(trips);
  } catch (err) {
    res.status(500).json({ message: "Error retrieving trips", error: err });
  }
};

// GET a single trip by trip code
const tripsFindByCode = async (req, res) => {
  try {
    const { tripCode } = req.params;
    if (!tripCode) {
      return res.status(400).json({ message: "Trip code is required" });
    }

    const trip = await Trip.findOne({ code: tripCode });
    if (!trip) {
      return res.status(404).json({ message: "Trip not found" });
    }

    res.status(200).json(trip);
  } catch (err) {
    res.status(500).json({ message: "Error retrieving trip", error: err });
  }
};

// POST a new trip
const tripsCreate = async (req, res) => {
  try {
    const trip = await Trip.create({
      code: req.body.code,
      name: req.body.name,
      length: req.body.length,
      start: req.body.start,
      resort: req.body.resort,
      perPerson: req.body.perPerson,
      image: req.body.image,
      description: req.body.description
    });
    res.status(201).json(trip);
  } catch (err) {
    console.error("Trip creation error:", err);
    res.status(400).json({ message: "Failed to create trip", error: err });
  }
};

// PUT update a trip by MongoDB _id
const tripsUpdate = async (req, res) => {
  try {
    const updatedTrip = await Trip.findByIdAndUpdate(
      req.params.tripId,
      {
        $set: {
          name: req.body.name,
          length: req.body.length,
          start: req.body.start,
          resort: req.body.resort,
          perPerson: req.body.perPerson,
          image: req.body.image,
          description: req.body.description
        }
      },
      { new: true, runValidators: true }
    );

    if (!updatedTrip) {
      return res.status(404).json({ message: "Trip not found" });
    }

    res.status(200).json(updatedTrip);
  } catch (err) {
    console.error("Trip update error:", err);
    res.status(400).json({ message: "Trip update failed", error: err });
  }
};

module.exports = {
  tripsList,
  tripsFindByCode,
  tripsCreate,
  tripsUpdate
};
