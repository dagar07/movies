import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { withRouter } from 'react-router'
import { ProfileStyle } from './index.style'

class Profile extends Component {
  state = {
    showDropDown: false
  }

  componentDidMount () {
    document.addEventListener('click', this.handleClickOutside, true)
  }

  componentWillUnmount () {
    document.removeEventListener('click', this.handleClickOutside, true)
  }

  handleItemClick = (path) => {
    this.props.history.push(path)
  }

  handleShowDropDown = () => {
    this.setState((prevState) => ({
      showDropDown: !prevState.showDropDown
    }))
  }

  handleClickOutside = event => {
    const domNode = ReactDOM.findDOMNode(this)
    if (!domNode || !domNode.contains(event.target)) {
      this.setState({
        showDropDown: false
      })
    }
  }

  render () {
    const { showDropDown } = this.state
    return (
      <ProfileStyle>
        <div onClick={this.handleShowDropDown}>
          My Profile
        </div>
        {
          showDropDown && (
            <ul className='content-drop-down'>
              <li onClick={() => this.handleItemClick('/mycontent')}>My Content</li>
            </ul>
          )
        }
      </ProfileStyle>
    )
  }
}

export default withRouter(Profile)
