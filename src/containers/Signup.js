import React from 'react'
import { connect } from 'react-redux'
import Signup from '../components/Signup'
import {
  emailChange,
  passwordChange,
  confirmChange,
  validateError,
} from '../redux/modules/signup'
import { signup } from '../redux/modules/auth'

const mapStateToProps = state => ({
  email: state.signup.email,
  password: state.signup.password,
  confirm: state.signup.confirm,
  error: state.signup.error || state.auth.error,
  loading: state.auth.loading,
})
const mapDispatchToProps = {
  emailChange,
  passwordChange,
  confirmChange,
  validateError,
  signup,
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
