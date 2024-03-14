// Using the Blockchain API to check the price of a cryptocurrency for the user.

import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

const API_URL = "https://api.openweathermap.org/data/2.5/weather";  // endpoint for current weather data
const apiKey = "bc8fcba16f783c2edfcefd88648c5c0a";

app.set('view engine', 'ejs'); // Set view engine to EJS
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Route to handle form submission and render weather data
app.post("/", async (req, res) => {
    try {
        const city = req.body.city; // Get the city name from the form
        const response = await axios.get(`${API_URL}?q=${city}&appid=${apiKey}&units=metric`); // Fetch current weather data for the city

        // Check if the response contains the expected data structure
        if (response.data && response.data.main && response.data.weather && response.data.weather.length > 0) {
            // Extract relevant weather information from the API response
            const temperature = response.data.main.temp;
            const description = response.data.weather[0].description;
            const icon = response.data.weather[0].icon;
            const iconURL = `http://openweathermap.org/img/wn/${icon}.png`;

            // Render the index.ejs template with the weather information and send it to the client
            res.render("index.ejs", { city, temperature, description, iconURL });
        } else {
            // If the response does not contain the expected data, render an error message
            res.render("index.ejs", { error: "Failed to fetch weather information. Please try again later." });
        }
    } catch (error) {
        console.error("Failed to make request:", error.message);
        res.render("index.ejs", { error: "Failed to fetch weather information. Please try again later." });
    }
});

// Default route to render the form
app.get("/", (req, res) => {
    res.render("index.ejs"); // Render the form for entering city name
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


    
    
    
    /*
            console.log(tomorrow);
            console.log(tomorrowDate);
            console.log(response.data.list);
            console.log(response.data.list[0]);
            console.log(response.data.list[0].dt_txt); 

2023-12-28T17:28:37.302Z
2023-12-28
[
  {
    dt: 1703700000,
    main: {
      temp: 281.28,
      feels_like: 280.56,
      temp_min: 280.99,
      temp_max: 281.28,
      pressure: 1018,
      sea_level: 1018,
      grnd_level: 1017,
      humidity: 92,
      temp_kf: 0.29
    },
    weather: [ [Object] ],
    clouds: { all: 100 },
    wind: { speed: 1.6, deg: 105, gust: 3.72 },
    visibility: 10000,
    pop: 0.28,
    rain: { '3h': 0.45 },
    sys: { pod: 'd' },
    dt_txt: '2023-12-27 18:00:00'
  },
  {
    dt: 1703710800,
    main: {
      temp: 281.28,
      feels_like: 279.59,
      temp_min: 281.28,
      temp_max: 281.29,
      pressure: 1017,
      sea_level: 1017,
      grnd_level: 1014,
      humidity: 92,
      temp_kf: -0.01
    },
    weather: [ [Object] ],
    clouds: { all: 100 },
    wind: { speed: 2.74, deg: 57, gust: 5.86 },
    visibility: 10000,
    pop: 0,
    sys: { pod: 'd' },
    dt_txt: '2023-12-27 21:00:00'
  },
  {
    dt: 1703721600,
    main: {
      temp: 281.4,
      feels_like: 279.96,
      temp_min: 281.4,
      temp_max: 281.46,
      pressure: 1016,
      sea_level: 1016,
      grnd_level: 1014,
      humidity: 94,
      temp_kf: -0.06
    },
    weather: [ [Object] ],
    clouds: { all: 100 },
    wind: { speed: 2.42, deg: 62, gust: 4.19 },
    visibility: 10000,
    pop: 0,
    sys: { pod: 'n' },
    dt_txt: '2023-12-28 00:00:00'
  },
  {
    dt: 1703732400,
    main: {
      temp: 281.54,
      feels_like: 279.21,
      temp_min: 281.54,
      temp_max: 281.54,
      pressure: 1012,
      sea_level: 1012,
      grnd_level: 1012,
      humidity: 98,
      temp_kf: 0
    },
    weather: [ [Object] ],
    clouds: { all: 100 },
    wind: { speed: 3.93, deg: 50, gust: 8.25 },
    visibility: 10000,
    pop: 0.58,
    rain: { '3h': 0.49 },
    sys: { pod: 'n' },
    dt_txt: '2023-12-28 03:00:00'
  },
  {
    dt: 1703743200,
    main: {
      temp: 281.96,
      feels_like: 279.22,
      temp_min: 281.96,
      temp_max: 281.96,
      pressure: 1010,
      sea_level: 1010,
      grnd_level: 1009,
      humidity: 98,
      temp_kf: 0
    },
    weather: [ [Object] ],
    clouds: { all: 100 },
    wind: { speed: 5.08, deg: 52, gust: 9.57 },
    visibility: 196,
    pop: 0.99,
    rain: { '3h': 7.06 },
    sys: { pod: 'n' },
    dt_txt: '2023-12-28 06:00:00'
  },
  {
    dt: 1703754000,
    main: {
      temp: 282.67,
      feels_like: 279.36,
      temp_min: 282.67,
      temp_max: 282.67,
      pressure: 1008,
      sea_level: 1008,
      grnd_level: 1007,
      humidity: 98,
      temp_kf: 0
    },
    weather: [ [Object] ],
    clouds: { all: 100 },
    wind: { speed: 7.39, deg: 91, gust: 12.43 },
    visibility: 6969,
    pop: 1,
    rain: { '3h': 16.57 },
    sys: { pod: 'n' },
    dt_txt: '2023-12-28 09:00:00'
  },
  {
    dt: 1703764800,
    main: {
      temp: 282.76,
      feels_like: 281.36,
      temp_min: 282.76,
      temp_max: 282.76,
      pressure: 1008,
      sea_level: 1008,
      grnd_level: 1008,
      humidity: 98,
      temp_kf: 0
    },
    weather: [ [Object] ],
    clouds: { all: 99 },
    wind: { speed: 2.73, deg: 31, gust: 4.64 },
    visibility: 10000,
    pop: 1,
    rain: { '3h': 2.39 },
    sys: { pod: 'n' },
    dt_txt: '2023-12-28 12:00:00'
  },
  {
    dt: 1703775600,
    main: {
      temp: 282.56,
      feels_like: 280.53,
      temp_min: 282.56,
      temp_max: 282.56,
      pressure: 1008,
      sea_level: 1008,
      grnd_level: 1008,
      humidity: 99,
      temp_kf: 0
    },
    weather: [ [Object] ],
    clouds: { all: 100 },
    wind: { speed: 3.78, deg: 31, gust: 8.28 },
    visibility: 289,
    pop: 0.84,
    rain: { '3h': 0.99 },
    sys: { pod: 'd' },
    dt_txt: '2023-12-28 15:00:00'
  },
  {
    dt: 1703786400,
    main: {
      temp: 282.76,
      feels_like: 280.59,
      temp_min: 282.76,
      temp_max: 282.76,
      pressure: 1007,
      sea_level: 1007,
      grnd_level: 1006,
      humidity: 98,
      temp_kf: 0
    },
    weather: [ [Object] ],
    clouds: { all: 100 },
    wind: { speed: 4.19, deg: 37, gust: 9.01 },
    visibility: 685,
    pop: 0.94,
    rain: { '3h': 0.33 },
    sys: { pod: 'd' },
    dt_txt: '2023-12-28 18:00:00'
  },
  {
    dt: 1703797200,
    main: {
      temp: 282.83,
      feels_like: 281.11,
      temp_min: 282.83,
      temp_max: 282.83,
      pressure: 1007,
      sea_level: 1007,
      grnd_level: 1006,
      humidity: 98,
      temp_kf: 0
    },
    weather: [ [Object] ],
    clouds: { all: 100 },
    wind: { speed: 3.3, deg: 16, gust: 8.05 },
    visibility: 10000,
    pop: 0.54,
    rain: { '3h': 0.45 },
    sys: { pod: 'd' },
    dt_txt: '2023-12-28 21:00:00'
  },
  {
    dt: 1703808000,
    main: {
      temp: 282.54,
      feels_like: 281.61,
      temp_min: 282.54,
      temp_max: 282.54,
      pressure: 1007,
      sea_level: 1007,
      grnd_level: 1007,
      humidity: 97,
      temp_kf: 0
    },
    weather: [ [Object] ],
    clouds: { all: 100 },
    wind: { speed: 2.03, deg: 19, gust: 5.14 },
    visibility: 10000,
    pop: 0.81,
    rain: { '3h': 0.59 },
    sys: { pod: 'n' },
    dt_txt: '2023-12-29 00:00:00'
  },
  {
    dt: 1703818800,
    main: {
      temp: 282.17,
      feels_like: 281.4,
      temp_min: 282.17,
      temp_max: 282.17,
      pressure: 1007,
      sea_level: 1007,
      grnd_level: 1006,
      humidity: 96,
      temp_kf: 0
    },
    weather: [ [Object] ],
    clouds: { all: 100 },
    wind: { speed: 1.78, deg: 2, gust: 3.77 },
    visibility: 10000,
    pop: 0.61,
    rain: { '3h': 0.39 },
    sys: { pod: 'n' },
    dt_txt: '2023-12-29 03:00:00'
  },
  {
    dt: 1703829600,
    main: {
      temp: 281.9,
      feels_like: 281.18,
      temp_min: 281.9,
      temp_max: 281.9,
      pressure: 1005,
      sea_level: 1005,
      grnd_level: 1004,
      humidity: 96,
      temp_kf: 0
    },
    weather: [ [Object] ],
    clouds: { all: 100 },
    wind: { speed: 1.68, deg: 335, gust: 3.11 },
    visibility: 10000,
    pop: 0.77,
    rain: { '3h': 0.45 },
    sys: { pod: 'n' },
    dt_txt: '2023-12-29 06:00:00'
  },
  {
    dt: 1703840400,
    main: {
      temp: 281.74,
      feels_like: 281,
      temp_min: 281.74,
      temp_max: 281.74,
      pressure: 1005,
      sea_level: 1005,
      grnd_level: 1004,
      humidity: 95,
      temp_kf: 0
    },
    weather: [ [Object] ],
    clouds: { all: 100 },
    wind: { speed: 1.68, deg: 336, gust: 2.93 },
    visibility: 10000,
    pop: 0.66,
    rain: { '3h': 0.38 },
    sys: { pod: 'n' },
    dt_txt: '2023-12-29 09:00:00'
  },
  {
    dt: 1703851200,
    main: {
      temp: 281.74,
      feels_like: 281.74,
      temp_min: 281.74,
      temp_max: 281.74,
      pressure: 1005,
      sea_level: 1005,
      grnd_level: 1005,
      humidity: 93,
      temp_kf: 0
    },
    weather: [ [Object] ],
    clouds: { all: 100 },
    wind: { speed: 1.17, deg: 329, gust: 1.27 },
    visibility: 10000,
    pop: 0.23,
    sys: { pod: 'n' },
    dt_txt: '2023-12-29 12:00:00'
  },
  {
    dt: 1703862000,
    main: {
      temp: 281.96,
      feels_like: 281.96,
      temp_min: 281.96,
      temp_max: 281.96,
      pressure: 1006,
      sea_level: 1006,
      grnd_level: 1005,
      humidity: 91,
      temp_kf: 0
    },
    weather: [ [Object] ],
    clouds: { all: 100 },
    wind: { speed: 1.13, deg: 282, gust: 1.3 },
    visibility: 10000,
    pop: 0,
    sys: { pod: 'd' },
    dt_txt: '2023-12-29 15:00:00'
  },
  {
    dt: 1703872800,
    main: {
      temp: 282.22,
      feels_like: 282.22,
      temp_min: 282.22,
      temp_max: 282.22,
      pressure: 1004,
      sea_level: 1004,
      grnd_level: 1004,
      humidity: 90,
      temp_kf: 0
    },
    weather: [ [Object] ],
    clouds: { all: 100 },
    wind: { speed: 1.08, deg: 297, gust: 2.01 },
    visibility: 10000,
    pop: 0.22,
    sys: { pod: 'd' },
    dt_txt: '2023-12-29 18:00:00'
  },
  {
    dt: 1703883600,
    main: {
      temp: 282.59,
      feels_like: 281.23,
      temp_min: 282.59,
      temp_max: 282.59,
      pressure: 1005,
      sea_level: 1005,
      grnd_level: 1004,
      humidity: 86,
      temp_kf: 0
    },
    weather: [ [Object] ],
    clouds: { all: 90 },
    wind: { speed: 2.62, deg: 302, gust: 6.16 },
    visibility: 10000,
    pop: 0.39,
    sys: { pod: 'd' },
    dt_txt: '2023-12-29 21:00:00'
  },
  {
    dt: 1703894400,
    main: {
      temp: 282.13,
      feels_like: 281.17,
      temp_min: 282.13,
      temp_max: 282.13,
      pressure: 1006,
      sea_level: 1006,
      grnd_level: 1005,
      humidity: 84,
      temp_kf: 0
    },
    weather: [ [Object] ],
    clouds: { all: 92 },
    wind: { speed: 1.98, deg: 319, gust: 4.42 },
    visibility: 10000,
    pop: 0.35,
    sys: { pod: 'n' },
    dt_txt: '2023-12-30 00:00:00'
  },
  {
    dt: 1703905200,
    main: {
      temp: 281.48,
      feels_like: 280.69,
      temp_min: 281.48,
      temp_max: 281.48,
      pressure: 1005,
      sea_level: 1005,
      grnd_level: 1005,
      humidity: 83,
      temp_kf: 0
    },
    weather: [ [Object] ],
    clouds: { all: 95 },
    wind: { speed: 1.69, deg: 339, gust: 2.9 },
    visibility: 10000,
    pop: 0.01,
    sys: { pod: 'n' },
    dt_txt: '2023-12-30 03:00:00'
  },
  {
    dt: 1703916000,
    main: {
      temp: 281.08,
      feels_like: 280.11,
      temp_min: 281.08,
      temp_max: 281.08,
      pressure: 1004,
      sea_level: 1004,
      grnd_level: 1004,
      humidity: 82,
      temp_kf: 0
    },
    weather: [ [Object] ],
    clouds: { all: 97 },
    wind: { speed: 1.81, deg: 330, gust: 3.78 },
    visibility: 10000,
    pop: 0.15,
    sys: { pod: 'n' },
    dt_txt: '2023-12-30 06:00:00'
  },
  {
    dt: 1703926800,
    main: {
      temp: 280.64,
      feels_like: 278.65,
      temp_min: 280.64,
      temp_max: 280.64,
      pressure: 1004,
      sea_level: 1004,
      grnd_level: 1003,
      humidity: 82,
      temp_kf: 0
    },
    weather: [ [Object] ],
    clouds: { all: 100 },
    wind: { speed: 2.99, deg: 326, gust: 5.85 },
    visibility: 10000,
    pop: 0.63,
    rain: { '3h': 1.06 },
    sys: { pod: 'n' },
    dt_txt: '2023-12-30 09:00:00'
  },
  {
    dt: 1703937600,
    main: {
      temp: 280.25,
      feels_like: 277.64,
      temp_min: 280.25,
      temp_max: 280.25,
      pressure: 1005,
      sea_level: 1005,
      grnd_level: 1004,
      humidity: 77,
      temp_kf: 0
    },
    weather: [ [Object] ],
    clouds: { all: 99 },
    wind: { speed: 3.91, deg: 302, gust: 7.8 },
    visibility: 10000,
    pop: 0.63,
    rain: { '3h': 0.26 },
    sys: { pod: 'n' },
    dt_txt: '2023-12-30 12:00:00'
  },
  {
    dt: 1703948400,
    main: {
      temp: 280.63,
      feels_like: 277.73,
      temp_min: 280.63,
      temp_max: 280.63,
      pressure: 1007,
      sea_level: 1007,
      grnd_level: 1006,
      humidity: 67,
      temp_kf: 0
    },
    weather: [ [Object] ],
    clouds: { all: 94 },
    wind: { speed: 4.68, deg: 301, gust: 7.09 },
    visibility: 10000,
    pop: 0.39,
    rain: { '3h': 0.11 },
    sys: { pod: 'd' },
    dt_txt: '2023-12-30 15:00:00'
  },
  {
    dt: 1703959200,
    main: {
      temp: 282.4,
      feels_like: 279.96,
      temp_min: 282.4,
      temp_max: 282.4,
      pressure: 1006,
      sea_level: 1006,
      grnd_level: 1005,
      humidity: 57,
      temp_kf: 0
    },
    weather: [ [Object] ],
    clouds: { all: 74 },
    wind: { speed: 4.61, deg: 284, gust: 6.32 },
    visibility: 10000,
    pop: 0.23,
    sys: { pod: 'd' },
    dt_txt: '2023-12-30 18:00:00'
  },
  {
    dt: 1703970000,
    main: {
      temp: 281.99,
      feels_like: 279.68,
      temp_min: 281.99,
      temp_max: 281.99,
      pressure: 1007,
      sea_level: 1007,
      grnd_level: 1006,
      humidity: 57,
      temp_kf: 0
    },
    weather: [ [Object] ],
    clouds: { all: 81 },
    wind: { speed: 4.09, deg: 289, gust: 6.14 },
    visibility: 10000,
    pop: 0,
    sys: { pod: 'd' },
    dt_txt: '2023-12-30 21:00:00'
  },
  {
    dt: 1703980800,
    main: {
      temp: 280.8,
      feels_like: 278.34,
      temp_min: 280.8,
      temp_max: 280.8,
      pressure: 1009,
      sea_level: 1009,
      grnd_level: 1009,
      humidity: 64,
      temp_kf: 0
    },
    weather: [ [Object] ],
    clouds: { all: 91 },
    wind: { speed: 3.85, deg: 288, gust: 6.09 },
    visibility: 10000,
    pop: 0,
    sys: { pod: 'n' },
    dt_txt: '2023-12-31 00:00:00'
  },
  {
    dt: 1703991600,
    main: {
      temp: 279.96,
      feels_like: 277.04,
      temp_min: 279.96,
      temp_max: 279.96,
      pressure: 1010,
      sea_level: 1010,
      grnd_level: 1009,
      humidity: 69,
      temp_kf: 0
    },
    weather: [ [Object] ],
    clouds: { all: 100 },
    wind: { speed: 4.37, deg: 275, gust: 7.55 },
    visibility: 10000,
    pop: 0,
    sys: { pod: 'n' },
    dt_txt: '2023-12-31 03:00:00'
  },
  {
    dt: 1704002400,
    main: {
      temp: 278.75,
      feels_like: 275.52,
      temp_min: 278.75,
      temp_max: 278.75,
      pressure: 1011,
      sea_level: 1011,
      grnd_level: 1010,
      humidity: 72,
      temp_kf: 0
    },
    weather: [ [Object] ],
    clouds: { all: 96 },
    wind: { speed: 4.43, deg: 290, gust: 8.18 },
    visibility: 10000,
    pop: 0,
    sys: { pod: 'n' },
    dt_txt: '2023-12-31 06:00:00'
  },
  {
    dt: 1704013200,
    main: {
      temp: 278.3,
      feels_like: 275.36,
      temp_min: 278.3,
      temp_max: 278.3,
      pressure: 1011,
      sea_level: 1011,
      grnd_level: 1011,
      humidity: 69,
      temp_kf: 0
    },
    weather: [ [Object] ],
    clouds: { all: 47 },
    wind: { speed: 3.72, deg: 276, gust: 7.33 },
    visibility: 10000,
    pop: 0,
    sys: { pod: 'n' },
    dt_txt: '2023-12-31 09:00:00'
  },
  {
    dt: 1704024000,
    main: {
      temp: 277.4,
      feels_like: 274.13,
      temp_min: 277.4,
      temp_max: 277.4,
      pressure: 1013,
      sea_level: 1013,
      grnd_level: 1012,
      humidity: 74,
      temp_kf: 0
    },
    weather: [ [Object] ],
    clouds: { all: 32 },
    wind: { speed: 3.93, deg: 275, gust: 8.36 },
    visibility: 10000,
    pop: 0,
    sys: { pod: 'n' },
    dt_txt: '2023-12-31 12:00:00'
  },
  {
    dt: 1704034800,
    main: {
      temp: 278.91,
      feels_like: 276.29,
      temp_min: 278.91,
      temp_max: 278.91,
      pressure: 1015,
      sea_level: 1015,
      grnd_level: 1014,
      humidity: 62,
      temp_kf: 0
    },
    weather: [ [Object] ],
    clouds: { all: 15 },
    wind: { speed: 3.41, deg: 269, gust: 5.97 },
    visibility: 10000,
    pop: 0,
    sys: { pod: 'd' },
    dt_txt: '2023-12-31 15:00:00'
  },
  {
    dt: 1704045600,
    main: {
      temp: 281.29,
      feels_like: 278.58,
      temp_min: 281.29,
      temp_max: 281.29,
      pressure: 1013,
      sea_level: 1013,
      grnd_level: 1012,
      humidity: 55,
      temp_kf: 0
    },
    weather: [ [Object] ],
    clouds: { all: 31 },
    wind: { speed: 4.6, deg: 269, gust: 6.68 },
    visibility: 10000,
    pop: 0,
    sys: { pod: 'd' },
    dt_txt: '2023-12-31 18:00:00'
  },
  {
    dt: 1704056400,
    main: {
      temp: 280.44,
      feels_like: 277.18,
      temp_min: 280.44,
      temp_max: 280.44,
      pressure: 1014,
      sea_level: 1014,
      grnd_level: 1013,
      humidity: 55,
      temp_kf: 0
    },
    weather: [ [Object] ],
    clouds: { all: 92 },
    wind: { speed: 5.4, deg: 267, gust: 7.73 },
    visibility: 10000,
    pop: 0,
    sys: { pod: 'd' },
    dt_txt: '2023-12-31 21:00:00'
  },
  {
    dt: 1704067200,
    main: {
      temp: 280.22,
      feels_like: 277.04,
      temp_min: 280.22,
      temp_max: 280.22,
      pressure: 1015,
      sea_level: 1015,
      grnd_level: 1014,
      humidity: 56,
      temp_kf: 0
    },
    weather: [ [Object] ],
    clouds: { all: 96 },
    wind: { speed: 5.09, deg: 263, gust: 8.28 },
    visibility: 10000,
    pop: 0,
    sys: { pod: 'n' },
    dt_txt: '2024-01-01 00:00:00'
  },
  {
    dt: 1704078000,
    main: {
      temp: 280.43,
      feels_like: 277.74,
      temp_min: 280.43,
      temp_max: 280.43,
      pressure: 1015,
      sea_level: 1015,
      grnd_level: 1014,
      humidity: 56,
      temp_kf: 0
    },
    weather: [ [Object] ],
    clouds: { all: 100 },
    wind: { speed: 4.14, deg: 257, gust: 8.28 },
    visibility: 10000,
    pop: 0,
    sys: { pod: 'n' },
    dt_txt: '2024-01-01 03:00:00'
  },
  {
    dt: 1704088800,
    main: {
      temp: 280.24,
      feels_like: 277.21,
      temp_min: 280.24,
      temp_max: 280.24,
      pressure: 1014,
      sea_level: 1014,
      grnd_level: 1013,
      humidity: 60,
      temp_kf: 0
    },
    weather: [ [Object] ],
    clouds: { all: 100 },
    wind: { speed: 4.76, deg: 231, gust: 9.59 },
    visibility: 10000,
    pop: 0,
    sys: { pod: 'n' },
    dt_txt: '2024-01-01 06:00:00'
  },
  {
    dt: 1704099600,
    main: {
      temp: 279.66,
      feels_like: 277.55,
      temp_min: 279.66,
      temp_max: 279.66,
      pressure: 1013,
      sea_level: 1013,
      grnd_level: 1013,
      humidity: 63,
      temp_kf: 0
    },
    weather: [ [Object] ],
    clouds: { all: 100 },
    wind: { speed: 2.89, deg: 233, gust: 7.36 },
    visibility: 10000,
    pop: 0,
    sys: { pod: 'n' },
    dt_txt: '2024-01-01 09:00:00'
  },
  {
    dt: 1704110400,
    main: {
      temp: 279.41,
      feels_like: 277.18,
      temp_min: 279.41,
      temp_max: 279.41,
      pressure: 1013,
      sea_level: 1013,
      grnd_level: 1012,
      humidity: 67,
      temp_kf: 0
    },
    weather: [ [Object] ],
    clouds: { all: 100 },
    wind: { speed: 2.99, deg: 214, gust: 6.17 },
    visibility: 10000,
    pop: 0,
    sys: { pod: 'n' },
    dt_txt: '2024-01-01 12:00:00'
  },
  {
    dt: 1704121200,
    main: {
      temp: 280.26,
      feels_like: 277.59,
      temp_min: 280.26,
      temp_max: 280.26,
      pressure: 1013,
      sea_level: 1013,
      grnd_level: 1013,
      humidity: 63,
      temp_kf: 0
    },
    weather: [ [Object] ],
    clouds: { all: 100 },
    wind: { speed: 4.03, deg: 234, gust: 7.21 },
    visibility: 10000,
    pop: 0,
    sys: { pod: 'd' },
    dt_txt: '2024-01-01 15:00:00'
  }
]




{
  dt: 1703700000,
  main: {
    temp: 281.28,
    feels_like: 280.56,
    temp_min: 280.99,
    temp_max: 281.28,
    pressure: 1018,
    sea_level: 1018,
    grnd_level: 1017,
    humidity: 92,
    temp_kf: 0.29
  },
  weather: [ { id: 500, main: 'Rain', description: 'light rain', icon: '10d' } ],
  clouds: { all: 100 },
  wind: { speed: 1.6, deg: 105, gust: 3.72 },
  visibility: 10000,
  pop: 0.28,
  rain: { '3h': 0.45 },
  sys: { pod: 'd' },
  dt_txt: '2023-12-27 18:00:00'
}


2023-12-27 18:00:00


Forecast for tomorrow: {
  dt: 1703721600,
  main: {
    temp: 281.2,
    feels_like: 279.56,
    temp_min: 281.2,
    temp_max: 281.2,
    pressure: 1016,
    sea_level: 1016,
    grnd_level: 1014,
    humidity: 93,
    temp_kf: 0
  },
  weather: [ { id: 500, main: 'Rain', description: 'light rain', icon: '10n' } ],
  clouds: { all: 100 },
  wind: { speed: 2.64, deg: 59, gust: 5.64 },
  visibility: 10000,
  pop: 0.26,
  rain: { '3h': 0.12 },
  sys: { pod: 'n' },
  dt_txt: '2023-12-28 00:00:00'
}

    */
    
    
    


