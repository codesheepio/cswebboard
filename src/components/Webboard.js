import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import TopicList from './TopicList'
import TopicDetail from './TopicDetail'
import PageNotFound from './PageNotFound'
import * as api from '../api'

const Webboard = () =>
  <div className="webboard">
    <div className="title">CS Webboard</div>
    <Switch>
      <Route exact path="/topics" component={TopicList} />
      <Route path="/topics/:id" component={TopicDetail} />
      <Redirect from="/" to="/topics" />
      <Route component={PageNotFound} />
    </Switch>
  </div>

export default Webboard
