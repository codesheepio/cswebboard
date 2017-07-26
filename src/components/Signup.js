import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as api from '../api'

export default class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      confirm: '',
      error: '',
    }
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(
      this
    )
    this.signup = this.signup.bind(this)
  }
  handleEmailChange(event) {
    this.setState({
      email: event.target.value,
    })
  }
  handlePasswordChange(event) {
    this.setState({
      password: event.target.value,
    })
  }
  handleConfirmPasswordChange(event) {
    this.setState({
      confirm: event.target.value,
    })
  }
  async signup() {
    const { email, password, confirm } = this.state
    if (password === confirm) {
      try {
        const credential = await api.post('http://localhost:3000/api/users', {
          email,
          password,
        })
        window.location = '/login'
      } catch (err) {
        this.setState({
          error: 'cannot create user',
        })
      }
    } else {
      this.setState({
        error: 'password mismatched',
      })
    }
  }
  render() {
    return (
      <div className="form-container">
        <div className="form">
          <label className="field">Email</label>
          <input
            className="field"
            name="email"
            onChange={this.handleEmailChange}
          />
          <label className="field">Password</label>
          <input
            className="field"
            name="password"
            type="password"
            onChange={this.handlePasswordChange}
          />
          <label className="field">Confirm Password</label>
          <input
            className="field"
            name="password"
            type="password"
            onChange={this.handleConfirmPasswordChange}
          />
          {this.state.error &&
            <div className="danger">
              {this.state.error}
            </div>}
          <input
            className="field btn"
            type="button"
            value="Signup"
            onClick={this.signup}
          />
        </div>
      </div>
    )
  }
}
