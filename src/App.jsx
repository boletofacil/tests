import React from 'react'
import Header from './components/layout/Header'

export default class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <h2>Hello, world!</h2>
        </div>
      </div>
    )
  }
}
