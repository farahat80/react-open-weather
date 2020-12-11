import svgIcons from '../../svgIcons';

const iconsMap = {
  '01d': svgIcons.sunny,
  '02d': svgIcons.cloudy,
  '03d': svgIcons.cloudy,
  '04d': svgIcons.cloudy,
  '09d': svgIcons.showers,
  '10d': svgIcons.rain,
  '11d': svgIcons.thunderstorms,
  '13d': svgIcons.windySnow,
  '50d': svgIcons.fog,
  '01n': svgIcons.sunny,
  '02n': svgIcons.cloudy,
  '03n': svgIcons.cloudy,
  '04n': svgIcons.cloudy,
  '09n': svgIcons.showers,
  '10n': svgIcons.rain,
  '11n': svgIcons.thunderstorms,
  '13n': svgIcons.windySnow,
  '50n': svgIcons.fog,
};

export const getIcon = name => {
  if (iconsMap[name]) {
    return iconsMap[name];
  }
  return svgIcons.sunny;
};
