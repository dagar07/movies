import styled from 'styled-components'
import { DisplayFlex } from '../../styles/commonStyle'

export const HeaderStyle = styled(DisplayFlex)`
  background-color: ${props => props.theme.headerBg};
  color: ${props => props.theme.white};
  justify-content: space-between;
  padding: 16px 38px;
  font-weight: 800;
  font-size: 24px;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 1000;

  .header-title {
    cursor: pointer;
  }
`
