import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  date: {
    color: ({ theme }) => theme.todayDateFontColor,
    composes: 'rw-today-date',
  },
  current: {
    fontSize: 45,
    color: ({ theme }) => theme.todayTempFontColor,
    composes: 'rw-today-current',
  },
  range: {
    color: ({ theme }) => theme.todayRangeFontColor,
    fontSize: 12,
    margin: [0, 0, 5, 2],
    composes: 'rw-today-range',
  },
  desc: {
    color: ({ theme }) => theme.todayDescFontColor,
    fontSize: 16,
    composes: 'rw-today-desc',
  },
  info: {
    color: ({ theme }) => theme.todayInfoFontColor,
    '& div': {
      marginBottom: 5,
    },
    composes: 'rw-today-info',
  },
  hr: {
    width: '100%',
    height: 0,
    borderBottom: 'solid 1px #fff',
    opacity: '0.4',
    margin: [10, 0],
    composes: 'rw-today-hr',
  },
});

export default useStyles;
