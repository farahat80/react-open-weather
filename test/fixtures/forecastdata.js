var forecastData = {
  "city": {
    "id": 6940463,
    "name": "Altstadt",
    "coord": {
      "lon": 11.5752,
      "lat": 48.137
    },
    "country": "DE",
    "population": 0
  },
  "cod": "200",
  "message": 0.3061192,
  "cnt": 5,
  "list": [{
    "dt": 1492858800,
    "temp": {
      "day": 6.75,
      "min": 3.76,
      "max": 6.75,
      "night": 3.76,
      "eve": 5.59,
      "morn": 6.75
    },
    "pressure": 963,
    "humidity": 85,
    "weather": [{
      "id": 501,
      "main": "Rain",
      "description": "moderate rain",
      "icon": "10d"
    }],
    "speed": 5.21,
    "deg": 286,
    "clouds": 92,
    "rain": 6.14
  }, {
    "dt": 1492945200,
    "temp": {
      "day": 7.52,
      "min": -1.57,
      "max": 8.82,
      "night": -1.57,
      "eve": 6.14,
      "morn": 2.84
    },
    "pressure": 965.28,
    "humidity": 80,
    "weather": [{
      "id": 600,
      "main": "Snow",
      "description": "light snow",
      "icon": "13d"
    }],
    "speed": 3.16,
    "deg": 290,
    "clouds": 12,
    "rain": 0.26,
    "snow": 0.19
  }, {
    "dt": 1493031600,
    "temp": {
      "day": 13.87,
      "min": 1.35,
      "max": 16.03,
      "night": 4.94,
      "eve": 12.9,
      "morn": 1.35
    },
    "pressure": 957.89,
    "humidity": 65,
    "weather": [{
      "id": 800,
      "main": "Clear",
      "description": "sky is clear",
      "icon": "01d"
    }],
    "speed": 1.42,
    "deg": 237,
    "clouds": 0
  }, {
    "dt": 1493118000,
    "temp": {
      "day": 18.51,
      "min": 5.88,
      "max": 19.48,
      "night": 8.95,
      "eve": 16.19,
      "morn": 5.88
    },
    "pressure": 947.04,
    "humidity": 54,
    "weather": [{
      "id": 801,
      "main": "Clouds",
      "description": "few clouds",
      "icon": "02d"
    }],
    "speed": 2.3,
    "deg": 132,
    "clouds": 12
  }, {
    "dt": 1493204400,
    "temp": {
      "day": 12.35,
      "min": 5.56,
      "max": 12.35,
      "night": 7.18,
      "eve": 11.16,
      "morn": 5.56
    },
    "pressure": 931.5,
    "humidity": 0,
    "weather": [{
      "id": 501,
      "main": "Rain",
      "description": "moderate rain",
      "icon": "10d"
    }],
    "speed": 2.66,
    "deg": 253,
    "clouds": 68,
    "rain": 5.1
  }]
}

var mappedForecastData = {
  "city": {
    "name": "Altstadt",
    "id": 6940463,
    "lng": 11.5752,
    "lat": 48.137
  },
  "days": [{
    "date": "Sat 22 Apr",
    "temprature": {
      "current": 7,
      "min": 4,
      "max": 7
    },
    "weather": {
      "group": "Rain",
      "description": "moderate rain",
      "icon": "10d"
    },
    "wind": {
      "speed": 5,
      "degree": null
    },
    "pressure": 963,
    "humidity": 85
  }, {
    "date": "Sun 23 Apr",
    "temprature": {
      "current": 8,
      "min": -2,
      "max": 9
    },
    "weather": {
      "group": "Snow",
      "description": "light snow",
      "icon": "13d"
    },
    "wind": {
      "speed": 3,
      "degree": null
    },
    "pressure": 965.28,
    "humidity": 80
  }, {
    "date": "Mon 24 Apr",
    "temprature": {
      "current": 14,
      "min": 1,
      "max": 16
    },
    "weather": {
      "group": "Clear",
      "description": "sky is clear",
      "icon": "01d"
    },
    "wind": {
      "speed": 1,
      "degree": null
    },
    "pressure": 957.89,
    "humidity": 65
  }, {
    "date": "Tue 25 Apr",
    "temprature": {
      "current": 19,
      "min": 6,
      "max": 19
    },
    "weather": {
      "group": "Clouds",
      "description": "few clouds",
      "icon": "02d"
    },
    "wind": {
      "speed": 2,
      "degree": null
    },
    "pressure": 947.04,
    "humidity": 54
  }, {
    "date": "Wed 26 Apr",
    "temprature": {
      "current": 12,
      "min": 6,
      "max": 12
    },
    "weather": {
      "group": "Rain",
      "description": "moderate rain",
      "icon": "10d"
    },
    "wind": {
      "speed": 3,
      "degree": null
    },
    "pressure": 931.5,
    "humidity": 0
  }]
}

module.exports = {
  forecastData,
  mappedForecastData
}