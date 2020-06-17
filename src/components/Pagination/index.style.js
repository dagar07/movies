import styled from 'styled-components'

export const PaginationStyle = styled.div`
  .page-link-container {
    width: 40px;
    height: 40px;
    display: flex;
    margin: 10px;
    align-items: center;
    justify-content: center;
  }

  .pagination-container {
    padding: 30px;
  }

  .break-me {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pagination {
    margin: 0;
    display: flex;
    list-style: none;
    outline: none;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .disabled {
      background-color: ${props => props.theme.borderGrey};
      border: 1px solid ${props => props.theme.borderGrey};
      border-radius: 10px;

      a {
        border-color: ${props => props.theme.borderGrey};
        color: ${props => props.theme.white};
      }
    }
  }

  .pagination > .active > a {
    font-weight: 800;
    background-color: ${props => props.theme.white};
  }
  
  .pagination > li > a{
    border: 1px solid ${props => props.theme.white};
    border-radius: 10px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    cursor: pointer;
  }

  .pagination > .active > a, .pagination > .active > span, .pagination > .active > a:hover, .pagination > .active > span:hover, .pagination > .active > a:focus, .pagination > .active > span:focus{
    background-color: ${props => props.theme.white};
    border-color: ${props => props.theme.white};
    color: ${props => props.theme.black};
    outline: none ;
  }

  .pagination > li > a, .pagination > li > span{
    color: ${props => props.theme.white};
    font-weight: 800;
  }
`
