import React from 'react'
import PropTypes from 'prop-types'
import Record from './Record'
import Details from './Details'

class Content extends React.Component {

  state = {
    isShowingDetails: false,
    detailsFor: null
  }

  toggleDetails = (record = null) => {
    console.log(this.state)
    this.setState({
      isShowingDetails: !!record,
      detailsFor: record
    })
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
      <React.Fragment>
        <div className="row">
          {this.props.results.map(record => {
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
        {this.getDetails()}
      </React.Fragment>
    )
  }
}

Content.propTypes = {
  results: PropTypes.array.isRequired
}

export default Content
