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
  },
  day: {
    width: '25%',
    textAlign: 'center',
    margin: 10,
    '&:not(:first-child)': {
      borderLeft: ({ theme }) => `solid 1px ${theme.forecastSeparatorColor}`,
    },
  },
  date: {
    color: ({ theme }) => theme.forecastDateColor,
    fontSize: 11,
    fontWeight: 'bold',
  },
  desc: {
    color: ({ theme }) => theme.forecastDescColor,
    margin: [10, 0, 10, 0],
    fontSize: 12,
  },
  range: {
    color: ({ theme }) => theme.forecastRangeColor,
    fontSize: 11,
  },
  icon: {
    paddingTop: 10,
  },
});

export default useStyles;
