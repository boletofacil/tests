import React from 'react'
import PropTypes from 'prop-types'
import loading from './../../assets/loading.gif'
import SearchBox from './../SearchBox'
import Content from './../Content'

class Main extends React.Component {

  displayResults = () => {
    if (this.props.isLoaded) {
      if (this.props.loading) {
        return (
          <React.Fragment>
            <hr/>
            <div className="text-center py-5">
              <img src={loading} alt="Loading animation" aria-label="Loading animation" />
            </div>
          </React.Fragment>
        )
      }
      return (
        <React.Fragment>
          <hr/>
          <Content
            response={this.props.response}
            currentPage={this.props.currentPage}
            submitSearch={this.props.submitSearch}
            gotoPage={this.props.gotoPage}
          />
        </React.Fragment>
      )
    }
  }

  render() {
    return (
      <div className="container-fluid py-5">
        <div className="container bg-white">
          <SearchBox submitSearch={this.props.submitSearch} />
          {this.displayResults()}
        </div>
      </div>
    )
  }
}

Main.propTypes = {
  loading: PropTypes.bool.isRequired,
  isLoaded: PropTypes.bool.isRequired,
  response: PropTypes.object.isRequired,
  currentPage: PropTypes.number.isRequired,
  submitSearch: PropTypes.func.isRequired,
  gotoPage: PropTypes.func.isRequired,
}

export default Main
