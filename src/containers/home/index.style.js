import styled from 'styled-components';
import { DisplayFlexCCC } from '../../styles/commonStyle';

export const HomeStyle = styled(DisplayFlexCCC)`
  height: 100vh;

  .home-title {
    color: ${props => props.theme.white};
    font-size: 4em;
    margin-bottom: 30px;
    text-align: center;
  }
`
