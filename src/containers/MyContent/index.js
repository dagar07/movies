import React, { Component } from 'react'
import Layout from '../../components/Layout'
import { MyContentStyle } from './index.style'
import { DisplayFlex } from '../../styles/commonStyle'
import NoContent from '../../components/NoContent'
import { getFromCookie } from '../../utility/cookies'
import { SAVE_MY_CONTENT, SAVE_MY_WATCHED } from '../../constants/cookies'
import MoviesDetailCard from '../../components/MoviesDetailCard'

class MyContent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      active: 'myContent',
      watched: getFromCookie(SAVE_MY_WATCHED),
      myContent: getFromCookie(SAVE_MY_CONTENT)
    }
    this.tabs = [
      {
        title: 'My Content',
        type: 'myContent'
      },
      {
        title: 'Watched',
        type: 'watched' 
      }
    ]
  }

  handleActiveTab = (tab) => {
    this.setState({
      active: tab,
      watched: getFromCookie(SAVE_MY_WATCHED),
      myContent: getFromCookie(SAVE_MY_CONTENT)
    })
  }

  render () {
    const { myContent = [], watched = [], active } = this.state
    console.log(watched)
    return (
      <Layout>
        <MyContentStyle>
          <DisplayFlex>
            {
              this.tabs.map(tab => (
                <div
                  onClick={() => this.handleActiveTab(tab.type)}
                  className={`page-title ${(active === tab.type) && 'active'} `}
                >
                  {tab.title}
                </div>
              ))
            }
          </DisplayFlex>
          {
            (active === 'myContent' && myContent.length) ? (
              <DisplayFlex className='content-container'>
                {
                  myContent.map(movie =>
                    <MoviesDetailCard
                      key={movie.Type}
                      movie={movie}
                      showWatched={true}
                    />
                  )
                }
              </DisplayFlex>
            ):
            (
              (active === 'myContent') && (
                <NoContent
                  title='You do not have any Content for watch'
                />
              )
            )
          }
          {
            (active === 'watched' && watched.length) ? (
              <DisplayFlex className='content-container'>
                {
                  watched.map(movie =>
                    <MoviesDetailCard
                      key={movie.Type}
                      movie={movie}
                      showWatched={true}
                    />
                  )
                }
              </DisplayFlex>
            ):
            (
              (active === 'watched') && (
                <NoContent
                  title='You do not have any Content for watch'
                />
              )
            )
          }
        </MyContentStyle>
      </Layout>
    )
  }
}

export default MyContent
