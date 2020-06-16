import styled from 'styled-components'

export const InputStyleWrapper = styled.input`
  flex: 1;
  margin-bottom: 12px;
  padding: 10px;
  font-size: 14px;
  border: 1px solid ${props => props.theme.borderGrey};
  background-color: ${props => props.theme.white};
  border-radius: 4px;

  ::placeholder {
    font-size: 12px;
    color: ${props => props.theme.grey};
  }

  &:focus {
    outline: currentColor;
  }
`
