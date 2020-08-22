import React from 'react'
import marvel from './services/MarvelApiSearch'
import Header from './components/layout/Header'
import Main from './components/layout/Main'

export default class App extends React.Component {

  state = {
    loading: false,
    isLoaded: false,
    searchResponse: {},
    lastSearch: '',
    currentPage: 1,
  }

  submitSearch = (search, page = 1) => {
    this.setState({
      loading: true,
      isLoaded: true,
      lastSearch: search,
      currentPage: page,
    })
    marvel.search(search, page)
      .then((response) => {
        this.setState({
          searchResponse: response.data.data,
        })
      })
      .catch((err) => {
        console.error(err)
        this.setState({
          isLoaded: false,
        })
      })
      .finally(() => {
        this.setState({
          loading: false,
        })
      })
  }

  gotoPage = (page) => {
    this.submitSearch(this.state.lastSearch, page)
  }

  render() {
    return (
      <div>
        <Header />
        <Main
          loading={this.state.loading}
          isLoaded={this.state.isLoaded}
          response={this.state.searchResponse}
          currentPage={this.state.currentPage}
          submitSearch={this.submitSearch}
          gotoPage={this.gotoPage}
        />
      </div>
    )
  }
}
