import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Topic from './Topic';
import * as api from '../api';

export default class TopicList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      topics: [],
    };
  }
  async componentDidMount() {
    try {
      const json = await api.get('http://localhost:3000/api/topics');
      this.setState({
        loaded: true,
        topics: json,
      });
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    return (
      <div className="topic-container">
        {this.state.loaded &&
          this.state.topics.map(topic =>
            <Link to={`/topics/${topic.id}`}>
              <Topic {...topic} />
            </Link>
          )}
      </div>
    );
  }
}
