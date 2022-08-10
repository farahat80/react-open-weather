import styled from '@emotion/styled';

export const StyledtodayPanel = styled.div`
  .rw-today-date {
    color: ${({ theme }) => theme.todayDateFontColor};
  }

  .rw-today-current {
    font-size: 45px;
    color: ${({ theme }) => theme.todayTempFontColor};
  }

  .rw-today-range {
    color: ${({ theme }) => theme.todayRangeFontColor};
    font-size: 12px;
    margin: 0 0 5px 2px;
  }

  .rw-today-desc {
    color: ${({ theme }) => theme.todayDescFontColor};
    font-size: 16px;
  }

  .rw-today-info {
    color: ${({ theme }) => theme.todayInfoFontColor};
  }

  .rw-today-info div {
    margin-bottom: 5px;
  }

  .rw-today-hr {
    width: 100%;
    height: 0;
    border-bottom: solid 1px #fff;
    opacity: 0.4;
    margin: 10px 0px;
  }
`;
