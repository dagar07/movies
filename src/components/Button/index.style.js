import styled from 'styled-components'

export const ButtonStyleWrapper = styled.button`
  padding: 8px;
  font-size: 12px;
  font-weight: 600;
  width: 30%;
  background-color: ${props => props.theme.primary};
  border: 1px solid ${props => props.theme.primary};
  color: ${props => props.theme.white};
  box-shadow: 0px 0.5px 4.5px 1px ${props => props.theme.borderGrey};

  &:disabled {
    background-color: ${props => props.theme.grey} !important;
    border: 1px solid ${props => props.theme.grey} !important;
  }
`
