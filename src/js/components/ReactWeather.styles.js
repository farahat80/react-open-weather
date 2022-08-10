import styled from '@emotion/styled';

export const StyledContainer = styled.div`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 13px;
  box-shadow: ${({ theme }) => theme.containerDropShadow};
  border-radius: 0 0 5px 5px;

  .rw-container-main {
    color: ${({ theme }) => theme.locationFontColor};
    height: 100%;
    width: 100%;
    background: ${({ theme }) =>
      `linear-gradient(to bottom right, ${theme.gradientStart}, ${theme.gradientMid}, ${theme.gradientEnd})`};
    display: flex;
    border-radius: ${({ showForecast }) =>
      showForecast ? '5px 5px 0 0' : '5px'};
  }

  .rw-container-header {
    margin: 0 0 10px 0;
    font-weight: 300;
    font-size: x-large;
    letter-spacing: 2px;
  }

  .rw-container-left {
    padding: 25px;
    width: 60%;
  }

  .rw-container-right {
    background-color: rgba(0, 0, 0, 0.1);
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
