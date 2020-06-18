import styled from 'styled-components'
import { DisplayRCC } from '../../styles/commonStyle'

export const AdvanceSearchStyle = styled(DisplayRCC)`
  align-items: stretch;
  .advance-input {
    margin-bottom: 0;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #c5c5c5;
    background-color: #ffffff;
    border-radius: 4px;
    margin-right: 16px;
  }

  .advance-search-btn {
    box-shadow: none;
    width: 90px;
  }

  @media (min-height: 320px) and (max-height: 736px) {
    flex-direction: column;
    width: 70%;

    .advance-input {
      margin-right: 0;
      margin-bottom: 16px;
    }

    .advance-search-btn {
      width: 120px;
    }
  }

  
  @media (min-width: 320px) and (max-width: 640px) {
    flex-direction: column;
    width: 70%;

    .advance-input {
      margin-right: 0;
      margin-bottom: 16px;
    }

    .advance-search-btn {
      width: 120px;
    }
  }

  @media (width: 320px) {
    flex-direction: column;
    width: 70%;

    .advance-input {
      margin-right: 0;
      margin-bottom: 16px;
    }

    .advance-search-btn {
      width: 120px;
    }
  }
`
