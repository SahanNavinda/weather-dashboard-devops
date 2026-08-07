require("dotenv").config();

const express = require("express");
const path = require("path");
const axios = require("axios");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Weather API Route
app.get("/api/weather", async (req, res) => {

    const city = req.query.city;

    if (!city) {
        return res.status(400).json({
            error: "City is required"
        });
    }

    try {

        const apiKey = process.env.OPENWEATHER_API_KEY;

        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        res.json(response.data);

    } catch (error) {

        res.status(500).json({
            error: "Unable to fetch weather data"
        });

    }

});

app.get("/api/forecast", async (req, res) => {

    const city = req.query.city;

    try {

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`
        );

        const data = await response.json();

        res.json(data);

    } catch (error) {

        res.status(500).json({
            error: "Unable to fetch forecast"
        });

    }

});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});