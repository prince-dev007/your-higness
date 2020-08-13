/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* Login component */

import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';


import Logo from '../common/logo';
// import SocialAuth from '../social/socialAuth';
import { loginUserAction } from '../../actions';
import { validaterrorLoginFields, validatemptyLoginFields } from '../../helpers/index';


/**
 * This is Login class which hold Login component.
 */
class Login extends Component {
  /* Srate Staff */
  constructor() {
    super();
    this.state = {
      passwordclass: '',
      emailclass: '',
      inputError: '',
      credential: '',
      password: '',
      result: '',

    };
  }

  componentDidMount() {
  }

  handleChange(key) {
    // return to a normal class again and update input field state
    this.setState({

      result: '',
      emailclass: '',
      passwordclass: '',
      [key.target.id]: key.target.value
    });
  }

  clearExistingUser() {
    const existingEmail = localStorage.getItem('userEmail');
    const { credential } = this.state;
    if (JSON.parse(existingEmail) !== credential) {
      localStorage.clear();
      sessionStorage.clear();
    }
  }

  SubmitCredentials(key) {
    key.preventDefault();
    const { emailclas, passwordclas, errorLoginFields } = validaterrorLoginFields(this.state);
    const { emailclass, passwordclass, emptyLoginFields } = validatemptyLoginFields(this.state);
    if (emptyLoginFields === 'error') {
      this.setState({ emailclass, passwordclass });
    } else if (errorLoginFields !== 'Loading...') {
      this.setState({ emailclass: emailclas, passwordclass: passwordclas, result: errorLoginFields });
    } else if (emptyLoginFields === 'Loading...' && errorLoginFields === 'Loading...') {
      this.setState({ result: 'Loading...' });
      this.props.loginCurrentUser(this.state);
    } else { this.setState({ result: `Please ${String.fromCodePoint(128591)} something wrong occured reload page and try again.` }); }
  }

  render() {
    const { passwordclass, emailclass, credential, password, result } = this.state;
    const { history, loggedIn, serverData } = this.props;

    const saveTemporaryData = () => {
      this.clearExistingUser();
      sessionStorage.clear();
      localStorage.removeItem('role');
      localStorage.removeItem('token');
      localStorage.removeItem('email');
      localStorage.removeItem('phone');
      localStorage.removeItem('lastname');
      localStorage.removeItem('firstname');

      localStorage.setItem('token', serverData.data.token);
      sessionStorage.setItem('token', serverData.data.token);

      localStorage.setItem('accountOwnerId', serverData.data.userData.id);
      sessionStorage.setItem('accountOwnerId', serverData.data.userData.id);

      sessionStorage.setItem('lastname', serverData.data.userData.lastname);
      localStorage.setItem('lastname', serverData.data.userData.lastname);

      sessionStorage.setItem('firstname', serverData.data.userData.firstname);
      localStorage.setItem('firstname', serverData.data.userData.firstname);

      localStorage.setItem('email', serverData.data.userData.email);
      sessionStorage.setItem('email', serverData.data.userData.email);

      sessionStorage.setItem('phone', serverData.data.userData.phone);
      localStorage.setItem('phone', serverData.data.userData.phone);

      sessionStorage.setItem('role', serverData.data.userData.role);
      localStorage.setItem('role', serverData.data.userData.role);

      sessionStorage.setItem('loginMessage', serverData.data.data);
      localStorage.setItem('loginMessage', serverData.data.data);
    };

    if (loggedIn === true) {
      saveTemporaryData();
      if (localStorage.getItem('token') && localStorage.getItem('role') && localStorage.getItem('email') && localStorage.getItem('phone') && localStorage.getItem('lastname') && localStorage.getItem('firstname')) {
        setTimeout(() => {
          history.push('/user-welcome-dashboard');
        }, 500);
      }
    }

    return (
      <div>
        {/* Setting background for Login Component */}
        <Helmet>
          <style>{'body { background-color: #dadada; }'}</style>
        </Helmet>

        <div className="independent-logo">

          <Logo />

        </div>

        <div className="option-bar">

          <span className="option">
            <span className="login-link "> Login </span>
          </span>

          <span className="option register">
            <a className="register-link " href="/register-user-account"> Register </a>
          </span>

        </div>

        <div className="divide-option-bar" />

        {/* Login Form Staff */}
        <div className="login-form-container">

          <h3> VETERINARIAN’S LOGIN </h3>

          {/* <SocialAuth /> */}

          <div>
            <input
              type="text"
              id="credential"
              className={`${emailclass} login-input-field`}
              placeholder=" Email / Mobile Pone "
              onChange={(id) => this.handleChange(id)}
              value={credential}
            />
          </div>

          <div>
            <input
              id="password"
              type="password"
              placeholder="Password"
              className={`${passwordclass} login-input-field`}
              onChange={(id) => this.handleChange(id)}
              value={password}
            />
          </div>

          <label className="login-check-field">
            Remember me for 30 days
            <input type="checkbox" />
            <span className="login-check-tick" value="true" />
            <a className="login-forget-password" href="/reset-user-account-link"> Forgot Password ? </a>
          </label>

          <div className="login-form-error">
            {
              this.props.loggedIn === false
                ? (this.props.serverData.data.data)
                : this.props.loggedIn === true
                  ? (this.props.serverData.data.data)
                  : (result)

            }
          </div>

          <div>
            <button className="login-button" type="submit" onClick={(key) => { this.SubmitCredentials(key); }}> Login </button>
          </div>

        </div>

      </div>
    );
  }
}

Login.defaultProps = {
  loggedIn: false,
  history: {},
  serverData: {},
  loginCurrentUser: PropTypes.func,
};

Login.propTypes = {
  loggedIn: PropTypes.bool,
  history: PropTypes.shape(),
  serverData: PropTypes.shape(),
  loginCurrentUser: PropTypes.func,
};

const mapStateToProps = ({ loginInitialState }) => (
  {
    loggedIn: loginInitialState.loggedIn,
    serverData: loginInitialState.data
  }
);

const mapDispatchToProps = (dispatch) => ({ loginCurrentUser: (data) => { dispatch(loginUserAction(data)); }, });

export default connect(mapStateToProps, mapDispatchToProps)(Login);