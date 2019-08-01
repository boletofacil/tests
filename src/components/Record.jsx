import React from 'react'
import PropTypes from 'prop-types'

class Record extends React.Component {

  render() {
    const { thumbnail, name } = this.props.data
    return (
      <div className="col-12 col-md-6">
        <div className="card">
          <div className="card-body">
            <img
              src={`${thumbnail.path}.${thumbnail.extension}`}
              className="figure-fluid float-left"
              style={{ maxHeight: '4em' }}
              alt="Character thumbnail"
            />
            <div className="text-center" style={{ marginLeft: '5em' }}>
              <h3 className="card-title text-truncate h5" title={name}>{name}</h3>
              <div className="card-text text-center">
                <button
                  type="button"
                  className="btn btn-sm btn-marvel w-50 rounded-0"
                  onClick={this.props.showDetails.bind(this, this.props.data)}
                >
                  More Details...
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Record.propTypes = {
  data: PropTypes.object.isRequired,
  showDetails: PropTypes.func.isRequired
}

export default Record
