import React, { Component } from 'react'
import Layout from '../../components/Layout'
import { MyContentStyle } from './index.style'
import { DisplayFlex } from '../../styles/commonStyle'

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
        </MyContentStyle>
      </Layout>
    )
  }
}

export default MyContent
