import React from 'react'
import PropTypes from 'prop-types'
import Record from './Record'

class Content extends React.Component {

  state = {
    isShowingDetails: false,
    detailsFor: null
  }

  showDetails = record => {
    this.setState({
      detailsFor: record
    })
  }

  getDetails = () => {
    console.log(this.state.detailsFor)
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
                showDetails={this.showDetails}
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
