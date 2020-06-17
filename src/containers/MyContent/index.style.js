import styled from 'styled-components'

export const MyContentStyle = styled.div`
  .page-title {
    font-size: 16px;
    padding: 14px;
    cursor: pointer;
    color: ${props => props.theme.darkerGrey};
  }

  .active {
    color: ${props => props.theme.white};
    font-weight: 700;
  }
`
