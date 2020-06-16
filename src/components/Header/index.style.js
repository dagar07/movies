import styled from 'styled-components'

export const HeaderStyle = styled.div`
  background-color: ${props => props.theme.white};
  text-align: center;
  padding: 16px 10px;
  font-weight: 800;
  font-size: 24px;
  box-shadow: 3px 2px 2px 0px ${props => props.theme.borderGrey};
`
