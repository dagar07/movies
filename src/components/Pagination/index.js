import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactPaginate from 'react-paginate'
import { PaginationStyle } from './index.style'

class Pagination extends Component {
  static propTypes = {
    onPageChange: PropTypes.func,
    totalPages: PropTypes.number
  }

  handlePagination = (e) => {
    this.props.onPageChange(e)
  }

  render() {
    const { totalPages } = this.props
    return (
      <PaginationStyle>
        <ReactPaginate
          previousLabel='<'
          nextLabel='>'
          breakLabel='...'
          pageCount={totalPages}
          breakClassName='break-me'
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          onPageChange={this.handlePagination}
          containerClassName='pagination'
          pageClassName='page-link-container'
          previousClassName='page-link-container'
          nextClassName='page-link-container'
          subContainerClassName='pages pagination'
          activeClassName='active'
        />
      </PaginationStyle>
    )
  }
}

export default Pagination