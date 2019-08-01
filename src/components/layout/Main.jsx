import React from 'react'
import PropTypes from 'prop-types'
import background from './../../assets/background.jpg'
import loading from './../../assets/loading.gif'
import SearchBox from './../SearchBox'
import Content from './../Content'

class Main extends React.Component {

  setBackground = () => {
    return {
      background: `
        url(${background})
        top
        center
        no-repeat
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
            <Content results={this.props.results} />
          </React.Fragment>
        )
      }
    }
  }

  render() {
    return (
      <div className="py-3" style={this.setBackground()}>
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
  results: PropTypes.array.isRequired
}

export default Main
