import React from 'react'
import PropTypes from 'prop-types'
import $ from 'jquery'

class Details extends React.Component {

  componentDidMount() {
    $('#character-details').on('hidden.bs.modal', event => {
      this.props.hideDetails.bind(this)
    })
    this.componentDidUpdate()
  }

  componentDidUpdate() {
    $('#character-details').modal('show')
    $('body').css('padding-right', '')
  }

  render() {
    const { thumbnail, name, description, stories, comics, series, events, urls } = this.props.character
    return (
      <div id="character-details" className="modal fade" tabIndex="1" role="dialog">
        <div className="modal-dialog" role="document">
          <div id="modal-content" className="modal-content">
            <div className="modal-header text-center d-block">
              <div className="text-right">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <figure className="figure w-50 mx-auto">
                <img className="figure-img img-fluid" style={{ borderRadius: '50%' }} src={`${thumbnail.path}.${thumbnail.extension}`} alt="Character thumbnail" />
              </figure>
              <h1 className="modal-title">{name}</h1>
            </div>
            <div className="modal-body text-center">
              <p className="h5">{description || <span className="font-italic">No description</span>}</p>
              <div className="row text-center pt-2">
                <div className="col-6 col-sm-3">
                  <h5><span className="badge badge-primary">{stories.available} stories</span></h5>
                </div>
                <div className="col-6 col-sm-3">
                  <h5><span className="badge badge-danger">{comics.available} comics</span></h5>
                </div>
                <div className="col-6 col-sm-3">
                  <h5><span className="badge badge-info">{series.available} series</span></h5>
                </div>
                <div className="col-6 col-sm-3">
                  <h5><span className="badge badge-warning">{events.available} events</span></h5>
                </div>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <button type="button" className="btn btn-light rounded-0" data-dismiss="modal">
                Close
              </button>
              <a href={urls[0].url} className="btn btn-marvel rounded-0">
                Official Marvel Page
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Details.propTypes = {
  character: PropTypes.object.isRequired
}

export default Details
