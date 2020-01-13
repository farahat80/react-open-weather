var dayData = {
  "coord": {
    "lon": 11.58,
    "lat": 48.14
  },
  "weather": [
    {
      "id": 804,
      "main": "Clouds",
      "description": "overcast clouds",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 3.93,
    "feels_like": -0.37,
    "temp_min": -1,
    "temp_max": 7.78,
    "pressure": 1026,
    "humidity": 57
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.6,
    "deg": 220
  },
  "clouds": {
    "all": 100
  },
  "dt": 1578836221,
  "sys": {
    "type": 1,
    "id": 1307,
    "country": "DE",
    "sunrise": 1578812474,
    "sunset": 1578843707
  },
  "timezone": 3600,
  "id": 2867714,
  "name": "Munich",
  "cod": 200
};

var mappedDayData = {
  "description": "overcast clouds",
  "icon": "04d",
  "temperature": {
    "min": "-1",
    "max": "8",
    "current": "4"
  },
  "wind": "3",
  "humidity": 57,
  "date": "Sun 12 January"
};

module.exports = {
  dayData,
  mappedDayData,
};
