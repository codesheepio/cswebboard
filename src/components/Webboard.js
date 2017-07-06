import React, { Component } from 'react'
import Topic from './Topic'
import * as api from '../api'

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
    api
      .get('http://localhost:3000/api/topics')
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
