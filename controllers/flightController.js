// controllers/flightController.js

const Flight = require('../models/Flight');  // Assuming you have a Flight model

exports.getFlights = async (req, res) => {
  try {
    const flights = await Flight.findAll();
    console.log('ZXZX Flights');
    console.log(flights);
    res.status(200).json(flights);
  } catch (error) {
    res.status(500).json({ message: 'An error occurred', error });
  }
};

// Add a New Flight
exports.addFlight = async (req, res) => {
    try {
      const newFlight = await Flight.create(req.body);
      res.status(201).json(newFlight);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  
  // Update Flight
  exports.updateFlight = async (req, res) => {
    const { id } = req.params;
    try {
      const flight = await Flight.findByPk(id);
      if (!flight) {
        return res.status(404).json({ error: 'Flight not found' });
      }
      await flight.update(req.body);
      res.json(flight);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  
  // Delete Flight
  exports.deleteFlight = async (req, res) => {
    const { id } = req.params;
    try {
      const flight = await Flight.findByPk(id);
      if (!flight) {
        return res.status(404).json({ error: 'Flight not found' });
      }
      await flight.destroy();
      res.json({ message: 'Flight deleted' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  