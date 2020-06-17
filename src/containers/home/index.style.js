import styled from 'styled-components';
import { DisplayFlexCCC } from '../../styles/commonStyle';

export const HomeStyle = styled(DisplayFlexCCC)`
  height: calc(100vh - 100px);

  .home-title {
    color: ${props => props.theme.white};
    font-size: 4em;
    margin-bottom: 30px;
    text-align: center;
  }

  @media (min-height: 320px) and (max-height: 736px) {
    height: calc(100vh - 70px);
    .home-title {
      font-size: 2em;
      padding: 0 10px;
    }
  }

  
  @media (min-width: 320px) and (max-width: 640px) {
    height: calc(100vh - 70px);
    .home-title {
      font-size: 2em;
      padding: 0 10px;
    }
  }

  @media (width: 320px) {
    height: calc(100vh - 70px);
    .home-title {
      font-size: 2em;
      padding: 0 10px;
    }
  }
`
