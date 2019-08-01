import React from 'react'
import PropTypes from 'prop-types'
import Record from './Record'
import Details from './Details'
import Pagination from './Pagination'

class Content extends React.Component {

  state = {
    isShowingDetails: false,
    detailsFor: null
  }

  toggleDetails = (record = null) => {
    this.setState({
      isShowingDetails: !!record,
      detailsFor: record
    })
  }

  hasPages = () => {
    if (this.props.response.total > this.props.response.limit) {
      return (
        <Pagination
          response={this.props.response}
          currentPage={this.props.currentPage}
          gotoPage={this.props.gotoPage}
        />
      )
    }
  }

  getDetails = () => {
    if (this.state.detailsFor) {
      return (
        <Details character={this.state.detailsFor} hideDetails={this.toggleDetails} />
      )
    }
  }

  render() {
    return (
      <div className="pb-4">
        {this.hasPages()}
        <div className="row">
          {this.props.response.results.map(record => {
            return (
              <Record
                key={record.id}
                data={record}
                showDetails={this.toggleDetails}
              />
            )
          })
        }
        </div>
        {this.hasPages()}
        {this.getDetails()}
      </div>
    )
  }
}

Content.propTypes = {
  response: PropTypes.object.isRequired,
  currentPage: PropTypes.number.isRequired,
  submitSearch: PropTypes.func.isRequired,
  gotoPage: PropTypes.func.isRequired
}

export default Content
