import React from 'react'
import marvel from './services/MarvelApiSearch'
import Header from './components/layout/Header'
import Main from './components/layout/Main'

export default class App extends React.Component {

  state = {
    loading: false,
    isLoaded: false,
    search: []
  }

  componentDidMount() {
    this.submitSearch()
  }

  submitSearch = search => {
    this.setState({
      loading: true,
      isLoaded: true
    })
    // TODO: activate AJAX
    // e.preventDefault()
    // marvel.search('c')
    //   .then(res => localStorage.marvel = JSON.stringify(res.data.data.results))
    //   .catch(err => console.log(err))
    this.setState({
      loading: false,
      search: JSON.parse(localStorage.marvel)
    })
  }

  render() {
    return (
      <div>
        <Header />
        <Main
          loading={this.state.loading}
          isLoaded={this.state.isLoaded}
          results={this.state.search}
          submitSearch={this.submitSearch}
        />
      </div>
    )
  }
}
