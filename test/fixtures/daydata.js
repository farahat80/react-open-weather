var dayData = {
  "coord": {
    "lon": 11.58,
    "lat": 48.14
  },
  "weather": [{
    "id": 501,
    "main": "Rain",
    "description": "moderate rain",
    "icon": "10d"
  }, {
    "id": 310,
    "main": "Drizzle",
    "description": "light intensity drizzle rain",
    "icon": "09d"
  }],
  "base": "stations",
  "main": {
    "temp": 7.23,
    "pressure": 1020,
    "humidity": 87,
    "temp_min": 6,
    "temp_max": 9
  },
  "visibility": 7000,
  "wind": {
    "speed": 5.7,
    "deg": 320
  },
  "clouds": {
    "all": 75
  },
  "dt": 1492879800,
  "sys": {
    "type": 1,
    "id": 4887,
    "message": 0.0667,
    "country": "DE",
    "sunrise": 1492834172,
    "sunset": 1492884927
  },
  "id": 6940463,
  "name": "Altstadt",
  "cod": 200
}
var mappedDayData = {
  "city": {
    "name": "Altstadt",
    "id": 6940463,
    "lng": 11.58,
    "lat": 48.14
  },
  "days": [{
    "date": "Sat 22 Apr",
    "temprature": {
      "current": 7,
      "min": 6,
      "max": 9
    },
    "weather": {
      "group": "Rain",
      "description": "moderate rain",
      "icon": "10d"
    },
    "wind": {
      "speed": 5.7,
      "degree": 320
    },
    "pressure": 1020,
    "humidity": 87
  }]
}

module.exports = {
  dayData,
  mappedDayData
}