import React from 'react'
import Header from './components/layout/Header'
import marvel from './services/MarvelApiSearch'

export default class App extends React.Component {

  state = {
    search: []
  }

  componentDidMount() {
    this.onSubmitSearch()
  }

  onSubmitSearch = e => {
    // TODO: activate AJAX
    // e.preventDefault()
    // marvel.search('c')
    //   .then(res => localStorage.marvel = JSON.stringify(res.data.data.results))
    //   .catch(err => console.log(err))
    this.setState({
      search: JSON.parse(localStorage.marvel)
    })
  }

  render() {
    return (
      <div>
        <Header />
        <div>
          <div className="container">
            <h2>Hello, world!</h2>
            <ul>
              {this.state.search.map(i => <li key={i.id}>{i.name}</li>)}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
