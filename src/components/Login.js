import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as api from '../api'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.login = this.login.bind(this)
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
  async login(event) {
    try {
      const credential = await api.post(
        'http://localhost:3000/api/users/login',
        {
          email: this.state.email,
          password: this.state.password,
        }
      )
      localStorage.setItem('credential', JSON.stringify(credential))
      window.location = '/'
    } catch (err) {}
    const str = localStorage.getItem('credential')
    const credential = JSON.parse(str)
    console.log(credential)
  }
  render() {
    return (
      <div className="form-container">
        <form className="form">
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
          <input
            className="field btn"
            type="button"
            value="Login"
            onClick={this.login}
          />
        </form>
      </div>
    )
  }
}
