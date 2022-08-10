import styled from '@emotion/styled';

export const StyledDaysPanel = styled.div`
  clear: both;
  display: flex;
  border-left: ${({ theme }) => `solid 1px ${theme.forecastBackgroundColor}`};
  border-right: ${({ theme }) => `solid 1px ${theme.forecastBackgroundColor}`};
  border-bottom: ${({ theme }) => `solid 1px ${theme.forecastBackgroundColor}`};
  border-radius: 0 0 5px 5px;
  font-size: 11px;
  background-color: ${({ theme }) => theme.forecastBackgroundColor};

  .rw-forecast-day{
    width: 25%;
    text-align: center;
    margin: 10px 0;
    padding: 0 10px;
    '&:not(:first-of-type)': {
      border-left: ${({ theme }) =>
        `solid 1px ${theme.forecastSeparatorColor}`},
    },
  }

  .rw-forecast-date{
    color: ${({ theme }) => theme.forecastDateColor};
    font-size: 11px;
    font-weight: bold;
  }

  .rw-forecast-desc{
    color: ${({ theme }) => theme.forecastDescColor};
    margin: 10px 0 10px 0;
    font-size: 12px;
  }

  .rw-forecast-range{
    color: ${({ theme }) => theme.forecastRangeColor};
    font-size: 11px;
  }

  .rw-forecast-icon{
    padding-top:10px;
  }

`;
