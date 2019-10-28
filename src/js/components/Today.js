import React from 'react';
import PropTypes from 'prop-types';
import createStyle from 'react-jss';
import { getLabelsByLanguage } from '../utils';

const Today = props => {
  const { current, unitsLabels, lang, classes } = props;
  const labels = getLabelsByLanguage(lang);
  return (
    <div className="rw-today">
      <div className={classes.date}>{current.date}</div>
      <div className={classes.hr}></div>
      <div className={classes.current}>
        {current.temperature.current} {unitsLabels.temperature}
      </div>
      <div className={classes.range}>
        {current.temperature.max} / {current.temperature.min}{' '}
        {unitsLabels.temperature}
      </div>
      <div className={classes.desc}>{current.description}</div>
      <div className={classes.hr}></div>
      <div className={classes.info}>
        <div>
          {labels.wind}: <b>{current.wind}</b> {unitsLabels.windSpeed}
        </div>
        <div>
          {labels.humidity}: <b>{current.humidity}</b> %
        </div>
      </div>
    </div>
  );
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

Today.propTypes = {
  current: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  unitsLabels: PropTypes.object.isRequired,
  lang: PropTypes.string.isRequired,
};

export default style(Today);
