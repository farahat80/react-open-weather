import svgIcons from '../../svgIcons';

const iconsMap = {
  'snow': svgIcons.snow,
  'snow-showers-day': svgIcons.snow,
  'snow-showers-night': svgIcons.snow,
  'thunder-rain': svgIcons.thunderstorms,
  'thunder-showers-day': svgIcons.stormyShowers,
  'thunder-showers-night': svgIcons.stormyShowers,
  'rain': svgIcons.rain,
  'showers-day': svgIcons.sprinkle,
  'showers-night': svgIcons.sprinkle,
  'fog': svgIcons.fog,
  'wind': svgIcons.sunny,
  'cloudy': svgIcons.cloudy,
  'partly-cloudy-day': svgIcons.cloudy,
  'partly-cloudy-night': svgIcons.cloudy,
  'clear-day': svgIcons.sunny,
  'clear-night': svgIcons.sunny,
};

export const getIcon = name => {
  if (iconsMap[name]) {
    return iconsMap[name];
  }
  return svgIcons.sunny;
};
