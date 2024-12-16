const express = require("express");
const axios = require("axios");
const router = express.Router();

// Retrieve the weather data for a specific city
router.get("/weather/:city", async (req, res) => {
  const city = req.params.city;
  const apiKey = process.env.OPENWEATHER_API_KEY;

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    );
    res.json(response.data);
  } catch (error) {
    console.error(error); // Log the complete error
    if (error.response && error.response.status === 404) {
      return res.status(404).json({ message: "City not found" });
    }
    res.status(500).json({
      message: "Failed to fetch weather data",
      error: error.response ? error.response.data : error.message,
    });
  }
});

module.exports = router;
