import React from 'react'
import PropTypes from 'prop-types'
import background from './../../assets/background.jpg'
import loading from './../../assets/loading.gif'
import SearchBox from './../SearchBox'
import Content from './../Content'

class Main extends React.Component {

  setBackground = () => {
    return {
      maxHeight: '100%',
      minWidth: '1080px',
      height: '720px',
      width: 'auto',
      top: '0',
      left: '0',
      background: `
        url(${background})
        top
        center
        fixed
      `
    }
  }

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
      } else {
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
  }

  render() {
    return (
      <div className="container-fluid py-5" style={this.setBackground()}>
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
  gotoPage: PropTypes.func.isRequired
}

export default Main
