import React from 'react';
import PropTypes from 'prop-types';
import { getLabelsByLanguage } from '../utils';
import { StyledtodayPanel } from './Today.styles';

const Today = ({ current, unitsLabels, lang, theme }) => {
  const labels = getLabelsByLanguage(lang);
  const hasRange =
    current.temperature.min !== undefined &&
    current.temperature.max !== undefined;
  return (
    <StyledtodayPanel className="rw-today" theme={theme}>
      <div className="rw-today-date">{current.date}</div>
      <div className="rw-today-hr" />
      <div className="rw-today-current">
        {current.temperature.current} {unitsLabels.temperature}
      </div>
      {hasRange && (
        <div className="rw-today-range">
          {current.temperature.max} / {current.temperature.min}{' '}
          {unitsLabels.temperature}
        </div>
      )}
      <div className="rw-today-desc">{current.description}</div>
      <div className="rw-today-hr" />
      <div className="rw-today-info">
        <div>
          {labels.wind}: <b>{current.wind}</b> {unitsLabels.windSpeed}
        </div>
        <div>
          {labels.humidity}: <b>{current.humidity}</b> %
        </div>
      </div>
    </StyledtodayPanel>
  );
};

Today.propTypes = {
  current: PropTypes.object.isRequired,
  unitsLabels: PropTypes.object.isRequired,
  lang: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
};

export default Today;
