import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Topic from './Topic'
import Comment from './Comment'
import * as api from '../api'

export default class TopicDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      topic: {},
      comments: [],
      loaded: false,
    }
    this.renderLoadedData = this.renderLoadedData.bind(this)
  }
  componentDidMount() {
    const topicId = this.props.match.params.id
    api
      .get(`http://localhost:3000/api/topics/${topicId}`)
      .then(json => this.setState({ topic: json }))
      .then(() =>
        api.get(`http://localhost:3000/api/topics/${topicId}/comments`)
      )
      .then(json => this.setState({ comments: json }))
      .then(() => this.setState({ loaded: true }))
      .catch(error => {
        this.setState({
          topic: {},
          comments: [],
        })
      })
  }
  renderLoadedData() {
    return (
      <div>
        <Topic {...this.state.topic} />
        {this.state.comments.map(comment => <Comment {...comment} />)}
        <Link to="/topics" className="btn">
          Back
        </Link>{' '}
      </div>
    )
  }
  render() {
    return (
      <div className="topic-container">
        {this.state.loaded && this.renderLoadedData()}
      </div>
    )
  }
}
