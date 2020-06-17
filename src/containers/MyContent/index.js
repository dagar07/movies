import React, { Component } from 'react'
import Layout from '../../components/Layout'
import { MyContentStyle } from './index.style'
import { DisplayFlex } from '../../styles/commonStyle'
import NoContent from '../../components/NoContent'
import { getFromCookie } from '../../utility/cookies'
import { SAVE_MY_CONTENT } from '../../constants/cookies'
import MoviesDetailCard from '../../components/MoviesDetailCard'

class MyContent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      active: 'myContent',
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
      active: tab
    })
  }

  render () {
    const { myContent = [] } = this.state
    console.log(myContent)
    return (
      <Layout>
        <MyContentStyle>
          <DisplayFlex>
            {
              this.tabs.map(tab => (
                <div
                  onClick={() => this.handleActiveTab(tab.type)}
                  className={`page-title ${(this.state.active === tab.type) && 'active'} `}
                >
                  {tab.title}
                </div>
              ))
            }
          </DisplayFlex>
          {
            myContent.length ? (
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
              <NoContent
                title='You do not have any Content for watch'
              />
            )
          }
        </MyContentStyle>
      </Layout>
    )
  }
}

export default MyContent
