import React from 'react';
import PropTypes from 'prop-types';
import createStyle from 'react-jss';
import { getLangs } from '../utils';

const Today = ({
  todayData,
  temperatureUnit,
  windSpeedUnit,
  lang,
  classes,
}) => {
  const langs = getLangs(lang);
  return (
    <div className="rw-today">
      <div className={classes.date}>{todayData.date}</div>
      <div className={classes.hr} />
      <div className={classes.current}>
        {todayData.temperature.current} {temperatureUnit}
      </div>
      <div className={classes.range}>
        {todayData.temperature.max} / {todayData.temperature.min}{' '}
        {temperatureUnit}
      </div>
      <div className={classes.desc}>{todayData.description}</div>
      <div className={classes.hr} />
      <div className={classes.info}>
        <div>
          {langs.Wind}: <b>{todayData.wind}</b> {windSpeedUnit}
        </div>
        <div>
          {langs.Humidity}: <b>{todayData.humidity}</b> %
        </div>
      </div>
    </div>
  );
};

Today.propTypes = {
  todayData: PropTypes.object.isRequired,
  temperatureUnit: PropTypes.string.isRequired,
  windSpeedUnit: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};

const style = createStyle({
  date: {
    color: '#B5DEF4',
  },
  current: {
    fontSize: 45,
  },
  range: {
    color: '#B5DEF4',
    fontSize: 12,
    margin: [0, 0, 5, 2],
  },
  desc: {
    color: '#B5DEF4',
    fontSize: 16,
    '& i': {
      fontSize: 20,
      color: '#B5DEF4',
    },
  },
  info: {
    color: '#B5DEF4',
    '& div': {
      marginBottom: 5,
    },
  },
  hr: {
    width: '100%',
    height: 0,
    borderBottom: 'solid 1px #fff',
    opacity: '0.4',
    margin: [10, 0],
  },
});

export default style(Today);
