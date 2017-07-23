import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Topic from './Topic';
import Comment from './Comment';
import * as api from '../api';

export default class TopicDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: {},
      comments: [],
      loaded: false,
    };
    this.renderLoadedData = this.renderLoadedData.bind(this);
  }
  async componentDidMount() {
    try {
      const topicId = this.props.match.params.id;
      const topic = await api.get(
        `http://localhost:3000/api/topics/${topicId}`
      );
      const comments = await api.get(
        `http://localhost:3000/api/topics/${topicId}/comments`
      );
      this.setState({
        topic,
        comments,
        loaded: true,
      });
    } catch (err) {
      this.setState({
        topic: {},
        comments,
        loaded: false,
      });
    }
  }
  renderLoadedData() {
    return (
      <div>
        <Topic {...this.state.topic} />
        {this.state.comments.map(comment => <Comment {...comment} />)}
        <Link to="/topics" className="btn">
          Back
        </Link>
      </div>
    );
  }
  render() {
    return (
      <div className="topic-container">
        {this.state.loaded && this.renderLoadedData()}
      </div>
    );
  }
}
