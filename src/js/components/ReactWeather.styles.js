import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    fontFamily: ({ theme }) => theme.fontFamily,
    fontSize: 13,
    boxShadow: ({ theme }) => theme.containerDropShadow,
    borderRadius: '0 0 5px 5px',
    composes: 'rw-container',
  },
  main: {
    color: ({ theme }) => theme.locationFontColor,
    width: '100%',
    height: '100%',
    background: ({ theme }) =>
      `linear-gradient(to bottom right, ${theme.gradientStart}, ${theme.gradientMid}, ${theme.gradientEnd})`,
    display: 'flex',
    borderRadius: ({ showForecast }) => (showForecast ? [[5, 5, 0, 0]] : 5),
    composes: 'rw-container-main',
  },
  header: {
    margin: [0, 0, 10, 0],
    fontWeight: '300',
    fontSize: 'x-large',
    letterSpacing: 2,
    composes: 'rw-container-header',
  },
  left: {
    padding: 25,
    width: '60%',
    composes: 'rw-container-left',
  },
  right: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    width: '40%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    composes: 'rw-container-right',
  },
});

export default useStyles;
