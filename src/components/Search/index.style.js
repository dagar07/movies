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
`
