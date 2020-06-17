import styled from 'styled-components'

export const MoviesCardStyle = styled.div`
  background-color: ${props => props.theme.white};
  background-image: url(${props => props.imgUrl});
  background-position: initial;
  background-repeat: no-repeat;
  background-size: cover;
  width: 200px;
  height: 190px;
  margin: 10px;
  position: relative;
  cursor: pointer;

  .bottom-strip {
    background-color: ${props => props.theme.primary};
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 4px 12px;
    color: ${props => props.theme.white};
  }

  .add-to-watched {
    font-size: 12px;
    font-weight: 800;
    color: ${props => props.theme.white};
  }

  .movie-title {
    font-size: 16px;
    font-weight: 800;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${props => props.theme.white};
  }

  .movie-subdetail {
    font-size: 10px;
    color: ${props => props.theme.darkerGrey};
    text-transform: capitalize;
  }

  @media (min-height: 320px) and (max-height: 736px) {
    position: relative;
    width: 100%;
  }

  @media (min-width: 320px) and (max-width: 640px) {
    position: relative;
    width: 100%;
  }
`
