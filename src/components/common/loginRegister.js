import React, { Component } from 'react';


/**
 * This is LoginRegister class which hold LoginRegister component.
 */
class LoginRegister extends Component {
  render() {
    return (
      <div className="land-signin-signup">
        <span>
          <a href="/login-user-account" className="url">Login</a>
        </span>
        <span className="separator"> / </span>
        <span>
          <a href="/register-user-account" className="url">register</a>
        </span>
      </div>
    );
  }
}
export default LoginRegister;
