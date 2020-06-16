import styled from 'styled-components'

export const LoaderStyle = styled.div`
  background-color: ${props => props.theme.lightGrey};
  position: relative;

  .loader-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    top: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: 1000;
    width: 100%;
    max-width: 100%;
  }
  
  .loader {
    border: ${props => {
      const borderWidth = props.size === 'small' ? '8px' : '12px'
      const borderClr = props.theme.lightGrey
      return `${borderWidth} solid ${borderClr}`
    }};
    border-radius: 50%;
    border-top: ${props => {
      const borderWidth = props.size === 'small' ? '8px' : '12px'
      const borderClr = props.theme.primary
      return `${borderWidth} solid ${borderClr}`
    }};
    width: ${props => props.size === 'small' ? '45px' : '70px'};
    height: ${props => props.size === 'small' ? '45px' : '70px'};
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;

    /* Safari */
    @-webkit-keyframes spin {
      0% { -webkit-transform: rotate(0deg); }
      100% { -webkit-transform: rotate(360deg); }
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  }
`
