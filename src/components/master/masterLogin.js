/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-closing-tag-location */
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import { loginMasterAction } from '../../actions';
import { validaterrorMasterLoginFields, validatemptyMasterLoginFields } from '../../helpers/index';


/**
 * This is MasterLogin class which hold Master Login component.
 */
class MasterLogin extends Component {
  /* Srate Staff */
  constructor() {
    super();
    this.state = {
      passwordclass: '',
      emailclass: '',
      inputError: '',
      email: '',
      password: '',
      result: '',

    };
  }

  handleChange(key) {
    // return to a normal class again and update input field state
    this.setState({
      passwordclass: '',
      emailclass: '',
      inputError: '',
      result: '',
      [key.target.id]: key.target.value
    });
  }

  SubmitCredentials(key) {
    key.preventDefault();
    const { loginCurrentMaster } = this.props;
    const { emailclas, passwordclas, errorLoginFields } = validaterrorMasterLoginFields(this.state);
    const { emailclass, passwordclass, emptyLoginFields } = validatemptyMasterLoginFields(this.state);
    if (emptyLoginFields === 'error') {
      this.setState({ emailclass, passwordclass });
    } else if (errorLoginFields !== 'Loading...') {
      this.setState({ emailclass: emailclas, passwordclass: passwordclas, result: errorLoginFields });
    } else if (emptyLoginFields === 'Loading...' && errorLoginFields === 'Loading...') {
      this.setState({ result: 'Loading...' });
      loginCurrentMaster(this.state);
    } else { this.setState({ result: `Please ${String.fromCodePoint(128591)} something wrong occured reload page and try again.` }); }
  }

  render() {
    const { passwordclass, emailclass, email, password, result } = this.state;
    const { history, loggedIn, serverData } = this.props;

    if (loggedIn === true) {
      localStorage.setItem('masterLoginMessage', serverData.data.data);
      localStorage.setItem('masterName', serverData.data.masterData.name);
      localStorage.setItem('masterEmail', serverData.data.masterData.email);
      localStorage.setItem('masterSessionID', serverData.data.masterSession);
      if (localStorage.getItem('masterSessionID')) {
        history.push('/master-pending-request');
      }
    } else if (loggedIn === false) {
      localStorage.removeItem('masterName');
      localStorage.removeItem('masterEmail');
      localStorage.removeItem('masterSessionID');
      localStorage.removeItem('masterLoginMessage');
    }
    return (
      <div>
        <Helmet>
          <style>{'body { background-color: rgb(0, 110, 110); }'}</style>
        </Helmet>

        <div className="master-dashbord-container">
          <div className="master-dashbord-login">
            <h1>Master Dashboard</h1>
            <div className="master-dashbord-login-fields">

              <div className="master-dashbord-login-input">
                <input
                  type="email"
                  id="email"
                  value={email}
                  className={emailclass}
                  placeholder=" email / mobile number "
                  onChange={(id) => this.handleChange(id)}
                />
              </div>

              <div className="master-dashbord-login-input">
                <input
                  id="password"
                  type="password"
                  value={password}
                  className={passwordclass}
                  placeholder="Type master password"
                  onChange={(id) => this.handleChange(id)}
                />
              </div>

              <div className="master-login-form-error ">
                {
                  loggedIn === false
                    ? (serverData.data.data)
                    : loggedIn === true
                      ? (serverData.data.data)
                      : (result)
                }
              </div>

              <div className="master-dashbord-login-input">
                <button type="submit" onClick={(key) => { this.SubmitCredentials(key); }}> Login </button>
              </div>

            </div>
          </div>
        </div>

      </div>
    );
  }
}


MasterLogin.defaultProps = {
  loggedIn: false,
  history: {},
  serverData: {},
  loginCurrentMaster: PropTypes.func,
};

MasterLogin.propTypes = {
  loggedIn: PropTypes.bool,
  history: PropTypes.shape(),
  serverData: PropTypes.shape(),
  loginCurrentMaster: PropTypes.func,
};

const mapStateToProps = ({ loginMasterInitialState }) => (
  {
    loggedIn: loginMasterInitialState.loggedIn,
    serverData: loginMasterInitialState.data
  }
);

const mapDispatchToProps = (dispatch) => ({ loginCurrentMaster: (data) => { dispatch(loginMasterAction(data)); }, });

export default connect(mapStateToProps, mapDispatchToProps)(MasterLogin);
