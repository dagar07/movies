import styled from 'styled-components'

export const DisplayRCC = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const DisplayFlexCCC = styled(DisplayRCC)`
  flex-direction: column;
`

export const DisplayRow = styled.div`
  display: flex;
  align-items: ${props => (props.align || 'start')};
  justify-content: ${props => (props.justify || 'start')};
`

export const DisplayFlex = styled.div`
  display: flex;
  flex-direction: ${props => (props.direction || 'row')};
  align-items: ${props => (props.align || 'stretch')};
  justify-content: ${props => (props.justify || 'stretch')};
`
