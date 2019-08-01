import React from 'react'
import marvel from './services/MarvelApiSearch'
import Header from './components/layout/Header'
import Main from './components/layout/Main'

export default class App extends React.Component {

  state = {
    loading: false,
    isLoaded: false,
    searchResponse: {}
  }

  submitSearch = (search, page = 1) => {
    console.log(search)
    this.setState({
      loading: true,
      isLoaded: true
    })
    marvel.search(search, page)
      .then(response => {
        this.setState({
          loading: false,
          searchResponse: response.data
        })
      })
      .catch(err => console.error(err))
  }

  render() {
    return (
      <div>
        <Header />
        <Main
          loading={this.state.loading}
          isLoaded={this.state.isLoaded}
          response={this.state.searchResponse}
          submitSearch={this.submitSearch}
        />
      </div>
    )
  }
}
