import React from 'react'
import PropTypes from 'prop-types'

class SearchBox extends React.Component {

  state = {
    search: ''
  }

  onChange = e => {
    this.setState({
      search: e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault()
    this.props.submitSearch(this.state.search)
  }

  getFontSize = () => {
    return {
      fontSize: '2em'
    }
  }

  render() {
    return (
      <form role="search" className="px-2 pt-4 pb-2" onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="search-box" className="h5">Start typing the name of your character:</label>
          <div className="row align-middle px-2">
            <input
              id="search-box"
              type="text"
              className="form-control border-marvel col-10 col-lg-11 rounded-0"
              style={this.getFontSize()}
              placeholder="e.g.: &quot;captain&quot;"
              value={this.state.search}
              onChange={this.onChange}
            />
            <button
              type="submit"
              className="btn btn-marvel col-2 col-lg-1 rounded-0"
              style={this.getFontSize()}
            >GO</button>
          </div>
        </div>
      </form>
    )
  }
}

SearchBox.propTypes = {
  submitSearch: PropTypes.func.isRequired
}

export default SearchBox
