import styled from 'styled-components'
import { DisplayFlex } from '../../styles/commonStyle'

export const SearchStyle = styled(DisplayFlex)`
  width: 50%;

  .search-input {
    margin: 0;
    border-left: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .search-btn {
    box-shadow: none;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  @media (min-height: 320px) and (max-height: 736px) {
    width: 90%;
  }

  
  @media (min-width: 320px) and (max-width: 640px) {
    width: 90%;
  }

  @media (width: 320px) {
    width: 90%;
  }
`
