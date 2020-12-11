import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  date: {
    color: ({ theme }) => theme.todayDateFontColor,
  },
  current: {
    fontSize: 45,
    color: ({ theme }) => theme.todayTempFontColor,
  },
  range: {
    color: ({ theme }) => theme.todayRangeFontColor,
    fontSize: 12,
    margin: [0, 0, 5, 2],
  },
  desc: {
    color: ({ theme }) => theme.todayDescFontColor,
    fontSize: 16,
  },
  info: {
    color: ({ theme }) => theme.todayInfoFontColor,
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

export default useStyles;
