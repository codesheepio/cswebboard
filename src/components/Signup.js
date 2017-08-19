import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as api from '../api'

export default class Signup extends Component {
  constructor(props) {
    super(props)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(
      this
    )
    this.signup = this.signup.bind(this)
  }
  handleEmailChange(event) {
    this.props.emailChange(event.target.value)
  }
  handlePasswordChange(event) {
    this.props.passwordChange(event.target.value)
  }
  handleConfirmPasswordChange(event) {
    this.props.confirmChange(event.target.value)
  }
  async signup() {
    const { email, password, confirm } = this.props
    if (password === confirm) {
      this.props.signup(email, password)
    } else {
      this.props.validateError('password mismatched')
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
          {this.props.error &&
            <div className="danger">
              {this.props.error}
            </div>}
          <input
            className="field btn"
            type="submit"
            value="Signup"
            disabled={this.loading}
            onClick={this.signup}
          />
        </div>
      </div>
    )
  }
}
