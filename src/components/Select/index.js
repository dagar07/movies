import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { SelectStyle } from './index.style'

export default class Select extends Component {
  static propTypes = {
    data: PropTypes.array,
    onChange: PropTypes.func
  }

  handleOnChange = (e) => {
    // pass the selected data
    this.props.onChange(e)
  }

  render() {
    const { data = [], placeholder, className } = this.props
    return (
      <SelectStyle
        onChange={this.handleOnChange}
        placeholder={placeholder}
        className={className}
      >
        {
          data.map(item => (
            <option key={item.id} value={item.id}>{item.title}</option>
          ))
        }
      </SelectStyle>
    )
  }
}
