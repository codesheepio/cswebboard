import React, { Component } from 'react'
import Topic from './Topic'

export default class Webboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      topics: [],
    }
  }
  componentDidMount() {
    this.setState({ loading: true })
    fetch('http://localhost:3000/api/topics')
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        return response.json()
      })
      .then(json => {
        this.setState({
          loading: false,
          topics: json,
        })
      })
      .catch(err => console.log(err))
  }
  render() {
    return (
      <div className="webboard">
        <div className="title">CS Webboard</div>
        <div className="topic-container">
          {this.state.loading
            ? <div className="loader" />
            : this.state.topics.map(topic => <Topic {...topic} />)}
        </div>
      </div>
    )
  }
}
