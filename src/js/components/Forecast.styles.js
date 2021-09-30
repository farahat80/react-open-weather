import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  daysPanel: {
    clear: 'both',
    display: 'flex',
    borderLeft: ({ theme }) => `solid 1px #${theme.forecastBackgroundColor}`,
    borderRight: ({ theme }) => `solid 1px #${theme.forecastBackgroundColor}`,
    borderBottom: ({ theme }) => `solid 1px #${theme.forecastBackgroundColor}`,
    borderRadius: '0 0 5px 5px',
    fontSize: 11,
    backgroundColor: ({ theme }) => theme.forecastBackgroundColor,
    composes: 'rw-forecast-days-panel',
  },
  day: {
    width: '25%',
    textAlign: 'center',
    margin: '10px 0',
    padding: '0 10px',
    '&:not(:first-child)': {
      borderLeft: ({ theme }) => `solid 1px ${theme.forecastSeparatorColor}`,
    },
    composes: 'rw-forecast-day',
  },
  date: {
    color: ({ theme }) => theme.forecastDateColor,
    fontSize: 11,
    fontWeight: 'bold',
    composes: 'rw-forecast-date',
  },
  desc: {
    color: ({ theme }) => theme.forecastDescColor,
    margin: [10, 0, 10, 0],
    fontSize: 12,
    composes: 'rw-forecast-desc',
  },
  range: {
    color: ({ theme }) => theme.forecastRangeColor,
    fontSize: 11,
    composes: 'rw-forecast-range',
  },
  icon: {
    paddingTop: 10,
    composes: 'rw-forecast-icon',
  },
});

export default useStyles;
