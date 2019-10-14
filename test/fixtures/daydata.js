var dayData = {
  coord: { lon: 11.58, lat: 48.14 },
  weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }],
  base: 'stations',
  main: {
    temp: 21.44,
    pressure: 1015,
    humidity: 52,
    temp_min: 18.33,
    temp_max: 24.44,
  },
  visibility: 10000,
  wind: { speed: 2.6, deg: 100 },
  clouds: { all: 0 },
  dt: 1571056835,
  sys: {
    type: 1,
    id: 1307,
    message: 0.0092,
    country: 'DE',
    sunrise: 1571031044,
    sunset: 1571070509,
  },
  timezone: 7200,
  id: 2867714,
  name: 'Munich',
  cod: 200,
};
var mappedDayData = {
  city: {
    name: 'Altstadt',
    id: 6940463,
    lng: 11.58,
    lat: 48.14,
  },
  days: [
    {
      date: 'Sat 22 Apr',
      temprature: {
        current: 7,
        min: 6,
        max: 9,
      },
      weather: {
        group: 'Rain',
        description: 'moderate rain',
        icon: '10d',
      },
      wind: {
        speed: 5.7,
        degree: 320,
      },
      pressure: 1020,
      humidity: 87,
    },
  ],
};

module.exports = {
  dayData,
  mappedDayData,
};
