import React from 'react'
import PropTypes from 'prop-types'

class Pagination extends React.Component {

  hasPrevious = () => {
    const style = { width: '5em' }
    if (this.props.currentPage === 1) {
      style.visibility = 'hidden'
    }
    return (
      <button
        type="button"
        className="btn btn-outline-marvel"
        style={style}
        onClick={this.requestPrevious}
      >Previous</button>
    )
  }

  hasNext = () => {
    const { limit, total } = this.props.response
    const lastPage = Math.ceil(total / limit)
    const style = { width: '5em' }
    if (this.props.currentPage === lastPage) { style.visibility = 'hidden' }
    return (
      <button
        type="button"
        className="btn btn-outline-marvel"
        style={style}
        onClick={this.requestNext}
      >Next</button>
    )
  }

  requestPrevious = () => {
    const current = this.props.currentPage - 1
    this.setState({ current })
    this.props.gotoPage(current)
    this.forceUpdate()
  }

  requestNext = () => {
    const current = this.props.currentPage + 1
    this.setState({ current })
    this.props.gotoPage(current)
    this.forceUpdate()
  }

  render() {
    return (
      <div className="mt-2 mb-3 d-flex justify-content-between">
        {this.hasPrevious()}
        {this.hasNext()}
      </div>
    )
  }
}

Pagination.propTypes = {
  response: PropTypes.object.isRequired,
  currentPage: PropTypes.number.isRequired,
  gotoPage: PropTypes.func.isRequired,
}

export default Pagination
