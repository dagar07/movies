import styled from 'styled-components'

export const LayoutStyle = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.lightGrey};

  .children-container {
    max-width: 1200px;
    margin: 0 auto;
  }
`
