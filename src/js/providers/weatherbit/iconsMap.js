import svgIcons from '../../svgIcons';

const iconsMap = {
  '200': svgIcons.thunderstorms,
  '201': svgIcons.thunderstorms,
  '202': svgIcons.thunderstorms,
  '230': svgIcons.thunderstorms,
  '231': svgIcons.thunderstorms,
  '232': svgIcons.thunderstorms,
  '233': svgIcons.thunderstorms,
  '300': svgIcons.showers,
  '301': svgIcons.showers,
  '302': svgIcons.showers,
  '500': svgIcons.rain,
  '501': svgIcons.rain,
  '502': svgIcons.rain,
  '511': svgIcons.rain,
  '520': svgIcons.rain,
  '521': svgIcons.showers,
  '522': svgIcons.rain,
  '600': svgIcons.snow,
  '601': svgIcons.snow,
  '602': svgIcons.snow,
  '610': svgIcons.snow,
  '611': svgIcons.sleet,
  '612': svgIcons.sleet,
  '621': svgIcons.snow,
  '622': svgIcons.snow,
  '623': svgIcons.snow,
  '700': svgIcons.fog,
  '711': svgIcons.fog,
  '721': svgIcons.fog,
  '731': svgIcons.fog,
  '741': svgIcons.fog,
  '751': svgIcons.fog,
  '800': svgIcons.sunny,
  '801': svgIcons.cloudy,
  '802': svgIcons.cloudy,
  '803': svgIcons.cloudy,
  '804': svgIcons.cloudy,
  '900': svgIcons.cloudy,
};

export const getIcon = name => {
  if (iconsMap[name]) {
    return iconsMap[name];
  }
  return svgIcons.sunny;
};
