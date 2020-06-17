import styled from 'styled-components'

export const MoviesCardStyle = styled.div`
  background-color: ${props => props.theme.white};
  background-image: url(${props => props.imgUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 200px;
  height: 190px;
  margin: 10px;
  position: relative;

  .bottom-strip {
    background-color: ${props => props.theme.primary};
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 4px 12px;
  }

  .movie-title {
    font-size: 16px;
    font-weight: 800;
    color: ${props => props.theme.white};
  }

  .movie-subdetail {
    font-size: 12px;
    color: ${props => props.theme.white};
  }
`
