import React from 'react';
import PropTypes from 'prop-types';
import Today from './Today';
import Forecast from './Forecast';
import WeatherIcon from './WeatherIcon';
import { StyledContainer } from './ReactWeather.styles';
import defaultTheme from '../defaultTheme';

const ReactWeather = ({
  unitsLabels,
  showForecast,
  lang,
  data,
  locationLabel,
  isLoading,
  errorMessage,
  theme,
}) => {
  if (data) {
    const { forecast, current } = data;
    if (isLoading) {
      return <div>Loading...</div>;
    }
    if (errorMessage) {
      return <div>{errorMessage}</div>;
    }
    return (
      <StyledContainer showForecast={showForecast} className="rw-container" theme={theme}>
        <div className="rw-container-main">
          <div className="rw-container-left">
            <h2 className="rw-container-header">{locationLabel}</h2>
            <Today
              current={current}
              unitsLabels={unitsLabels}
              lang={lang}
              theme={theme}
            />
          </div>
          <div className="rw-container-right">
            <WeatherIcon
              path={current.icon}
              size={120}
              color={theme.todayIconColor}
              title={current.description}
            />
          </div>
        </div>
        {showForecast && (
          <Forecast
            unitsLabels={unitsLabels}
            forecast={forecast}
            lang={lang}
            theme={theme}
          />
        )}
      </StyledContainer>
    );
  }
  return null;
};

ReactWeather.propTypes = {
  data: PropTypes.object,
  isLoading: PropTypes.bool,
  errorMessage: PropTypes.string,
  unitsLabels: PropTypes.object,
  showForecast: PropTypes.bool,
  lang: PropTypes.string,
  locationLabel: PropTypes.string,
  theme: PropTypes.object,
};

ReactWeather.defaultProps = {
  data: null,
  locationLabel: '',
  errorMessage: null,
  isLoading: false,
  unitsLabels: {
    temperature: 'C',
    windSpeed: 'Km/h',
  },
  showForecast: true,
  lang: 'en',
  theme: defaultTheme,
};

export default ReactWeather;
