import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import TopicList from './TopicList'
import TopicDetail from './TopicDetail'
import Login from './Login'
import Signup from '../containers/Signup'
import PageNotFound from './PageNotFound'
import * as api from '../api'

const Webboard = () =>
  <div className="webboard">
    <div className="title">CS Webboard</div>
    <Switch>
      <Route exact path="/topics" component={TopicList} />
      <Route path="/topics/:id" component={TopicDetail} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Redirect from="/" to="/topics" />
      <Route component={PageNotFound} />
    </Switch>
  </div>

export default Webboard
