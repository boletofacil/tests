import React from 'react'

class Content extends React.Component {
  render() {
    return (
      <ul>
        {this.props.results.map(i => <li key={i.id}>{i.name}</li>)}
      </ul>
    )
  }
}

export default Content
