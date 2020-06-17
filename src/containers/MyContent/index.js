import React, { Component } from 'react'
import Layout from '../../components/Layout'
import { MyContentStyle } from './index.style'
import { DisplayFlex } from '../../styles/commonStyle'
import NoContent from '../../components/NoContent'
import { getFromCookie } from '../../utility/cookies'
import { SAVE_CONTENT } from '../../images'
import { SAVE_MY_CONTENT } from '../../constants/cookies'

class MyContent extends Component {
  state = {
    active: 'myContent',
  }

  constructor(props) {
    super(props)
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
    this.myContent = getFromCookie(SAVE_MY_CONTENT)
  }

  handleActiveTab = (tab) => {
    this.setState({
      active: tab
    })
  }

  render () {
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
          <NoContent
            title='You do not have any Content for watch'
          />
        </MyContentStyle>
      </Layout>
    )
  }
}

export default MyContent
