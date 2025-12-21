import svgIcons from '../../svgIcons';

const weatherCodeMap = {
    0:  { 'desc': 'Clear sky', 'icon': svgIcons.sunny },
    1:  { 'desc': 'Mainly clear', 'icon': svgIcons.sunny },
    2:  { 'desc': 'Partly cloudy', 'icon': svgIcons.cloudy },
    3:  { 'desc': 'Overcast', 'icon': svgIcons.cloudy },
    45: { 'desc': 'Fog',  'icon': svgIcons.fog },
    48:	{ 'desc': 'Depositing rime fog', 'icon': svgIcons.fog },
    51: { 'desc': 'Drizzle: Light intensity', 'icon': svgIcons.sprinkle },
    53: { 'desc': 'Drizzle: Moderate intensity', 'icon': svgIcons.sprinkle },
    55: { 'desc': 'Drizzle: Dense intensity', 'icon': svgIcons.sprinkle },
    56: { 'desc': 'Freezing Drizzle: Light intensity', 'icon': svgIcons.sleet },
    57: { 'desc': 'Freezing Drizzle: Dense intensity', 'icon': svgIcons.sleet },
    61: { 'desc': 'Rain: Slight intensity', 'icon': svgIcons.rain },
    63: { 'desc': 'Rain: Moderate intensity', 'icon': svgIcons.rain },
    65: { 'desc': 'Rain: Heavy intensity', 'icon': svgIcons.rain },
    66: { 'desc': 'Freezing Rain: Light intensity', 'icon': svgIcons.rain },
    67: { 'desc': 'Freezing Rain: Heavy intensity', 'icon': svgIcons.rain },
    71: { 'desc': 'Snow fall: Slight intensity', 'icon': svgIcons.snow },
    73: { 'desc': 'Snow fall: Moderate intensity', 'icon': svgIcons.snow },
    75: { 'desc': 'Snow fall: Heavy intensity', 'icon': svgIcons.snow },
    77: { 'desc': 'Snow grains', 'icon': svgIcons.snow },
    80: { 'desc': 'Rain showers: Slight', 'icon': svgIcons.rain },
    81: { 'desc': 'Rain showers: Moderate', 'icon': svgIcons.rain },
    82: { 'desc': 'Rain showers: Violent', 'icon': svgIcons.rain },
    85: { 'desc': 'Snow showers: Slight', 'icon': svgIcons.snow },
    86: { 'desc': 'Snow showers: Heavy', 'icon': svgIcons.snow },
    95: { 'desc': 'Thunderstorm: Slight or moderate', 'icon': svgIcons.thunderstorms },
    96: { 'desc': 'Thunderstorm with slight hail', 'icon': svgIcons.thunderstorms },
    99: { 'desc': 'Thunderstorm with heavy hail', 'icon': svgIcons.thunderstorms },
}

export const getWeatherDescription = code => {
    if (weatherCodeMap[code]) {
        return weatherCodeMap[code]['desc']
    }
    return ''
}

export const getIcon = code => {
    if (weatherCodeMap[code]) {
        return weatherCodeMap[code]['icon']
    }
    return svgIcons.sunny;
}